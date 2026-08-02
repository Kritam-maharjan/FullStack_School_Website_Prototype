const mongoose = require('mongoose')

const NoticeSchema = new mongoose.Schema({
  
  notice_title: {
    type:String,
    required: true
  },
  date:{
    type:Date,
    required: true
  },
  notice_desc: {
    type: String,
    required: true
  },
  
}, {timestamps: true})

module.exports = mongoose.model('Notice', NoticeSchema)