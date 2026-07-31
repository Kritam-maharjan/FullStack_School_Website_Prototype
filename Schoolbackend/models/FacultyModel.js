const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const FacultySchema = new mongoose.Schema({
  _id:{
    type: String,
    required: true
  },
  faculty_name: {
    type: String,
    required: true,
    trim: true
  },
  department:{
    type: Number,
    ref: "Department",
    required: true
  },
  email:{
    type: String,
    required: true,
    trim: true
  },
  dob : {
    type: Date,
    required: true,
    trim: true
  },
  qualification: {
    type: String,
    required: true,
    trim: true
  },
  experience: {
    type: String,
    required: true,
    trim: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Faculty', FacultySchema)