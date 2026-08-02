const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
    trim: true
  },
  department:{
    type: Number,
    ref: "Department",
    required: true
  },
  role:{
    type: String,
    enum: ['user','admin','staff'],
    default:'user'
  },
  isVerified: {
    type: Boolean,
    default: false
  }

}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)