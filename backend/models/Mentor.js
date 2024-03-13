import mongoose from 'mongoose';

//const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  mentorId: { type: String, required: true },
  mentorName: { type: String, required: true }
});

//module.exports = mongoose.model('Mentor', mentorSchema);
export default mentorSchema;