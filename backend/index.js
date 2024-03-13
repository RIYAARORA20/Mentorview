import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import mentorRoutes from './Routes/mentorRoutes.js';
import Mentor from './models/Mentor.js';
import {deleteMany, insertMany} from "mongoose";

dotenv.config()

const app=express()
const port = process.env.PORT|| 5000

const corsOptions={
    origin: true
}

const sampleMentors = [
    { mentorId: '1', mentorName: 'John Doe' },
    { mentorId: '2', mentorName: 'Jane Smith' },
    { mentorId: '3', mentorName: 'Michael Johnson' },
    { mentorId: '4', mentorName: 'Emily Davis' },
    { mentorId: '5', mentorName: 'David Brown' },
    { mentorId: '6', mentorName: 'Sarah Wilson' },
    { mentorId: '7', mentorName: 'James Taylor' },
    { mentorId: '8', mentorName: 'Emma Martinez' },
    { mentorId: '9', mentorName: 'William Anderson' },
    { mentorId: '10', mentorName: 'Olivia Garcia' }
  ];

app.get('/', (req, res)=>{
    res.send('api is working')
})

//database connection
mongoose.set('strictQuery',false)
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } )

        console.log('MongoDb database is connected');

    } catch (error) {
        console.log('MongoDb database connection is failed');
    }
}
//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/mentors', mentorRoutes);

Mentor.deleteMany({}, (err) => {
    if (err) {
      console.error(err);
    } else {
      Mentor.insertMany(sampleMentors)
        .then(() => console.log('Sample mentors seeded'))
        .catch(err => console.error(err));
    }
  });

app.listen(port, ()=>{
    connectDB();
    console.log("server is running on port"+port);
})