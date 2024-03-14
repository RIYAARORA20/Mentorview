import mongoose from "mongoose";

const Studentlist = new mongoose.Schema(
    {
        Name:{
            type: String,
            required: true
        },

        Rollno:{
            type: Number,
            required: true
        },

        Idea:{
            type: Number,
            
        },
        
        Execution:{
            type: Number,
          
        },

        Viva:{
            type: Number,
            
        }
    }
);

const Student = mongoose.model('Student', Studentlist);

export default Student;