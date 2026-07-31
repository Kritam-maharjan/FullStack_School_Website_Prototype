const NoticeModel = require('../models/NoticeModel')

// add notice
exports.addNotice = async (req, res) => {
  let noticeExists = await NoticeModel.findOne({notice_title: req.body.notice_title})
  if(noticeExists){
    return res.status(400).json({error: "Notice already published"})
  }

  let noticeToAdd = await NoticeModel.create({
    _id: req.body._id,
    notice_title: req.body.notice_title,
    date: req.body.date,
    notice_desc: req.body.notice_desc
  })

  if(!noticeToAdd){
    return res.status(400).json({error:"Coulnot add the notice"})
  }

  res.send({notice: noticeToAdd, success: true})
}

//get all notice
exports.getAllNotice = async(req, res) =>{
  let notice = await NoticeModel.find()
    .select("-createdAt")
    .select("-updatedAt")
  if(!notice){
    return res.status(400).json({error: "Couldnot get all the news."})
  }
  res.send({notices: notice, success: true})
}

//delete notice
exports.deleteNotice = async(req, res) => {
  let noticeToDelete = await NoticeModel.findByIdAndDelete(req.params.id)
  if(!noticeToDelete){
    return res.status(400).json({error: "Couldnot find the news with the id:"+ req.params.id})
  }
  res.send({message: "Notice deleted Successfully", success: true, deleted: noticeToDelete })
}