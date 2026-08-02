const NewsModel = require('../models/NewsModel')

//add news
exports.addNews = async(req, res) =>{
  let newsExists = await NewsModel.findOne({news_title: req.body.news_title})
  if(newsExists){
    return res.status(400).json({error:"News already published"})
  }

  let newsToAdd = await NewsModel.create({
    news_title: req.body.news_title,
    date: req.body.date,
    news_desc: req.body.news_desc,
    author_id: req.body.author_id
  })
  
  if(!newsToAdd){
    return res.status(400).json({error:"Coulnot add the news"})
  }

  res.send({news: newsToAdd, success: true})
}

//get all news
exports.getAllNews = async(req, res) =>{
  let news = await NewsModel.find().populate("author_id")
    .select("-createdAt")
    .select("-updatedAt")
  if(!news){
    return res.status(400).json({error: "Couldnot get all the news."})
  }
  res.send({news: news, success: true})
}

//delete news
exports.deletenews = async(req, res) => {
  let newsToDelete = await NewsModel.findByIdAndDelete(req.params.id)
  if(!newsToDelete){
    return res.status(400).json({error: "Couldnot find the news with the id:"+ req.params.id})
  }
  res.send({message: "News deleted Successfully", success: true, deleted: newsToDelete })
}