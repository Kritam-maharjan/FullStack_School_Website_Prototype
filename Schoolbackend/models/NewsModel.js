const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema({
  _id:{
    type: Number,
    required: true
  },
  news_title:{
    type:String,
    required: true
  },
  date:{
    type: Date,
    required: true
  },
  news_desc:{
    type: String,
    required: true
  },
  author_id:{
    type: Number,
    ref: "Faculty",
    required: true
  }
})

module.exports = mongoose.model('News', NewsSchema)
