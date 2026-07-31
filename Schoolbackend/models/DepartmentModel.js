const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  department_name:{
    type: String, 
    required: true,
    trim: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Department', DepartmentSchema)