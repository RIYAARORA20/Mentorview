import express from 'express';

import Connection from './database/db.js';
import Student from './models/Studentlist.js';
import router from './Routes/student.js';
import cors from "cors";

const app=express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/", router);
const PORT = 8000;

Connection();


app.listen(PORT, ()=> console.log(`Your server is running successfully on PORT ${PORT}`));