const FacultyModel = require('../models/FacultyModel')

//add faculty members
exports.addFaculty = async(req, res) => {
  let FacultyExists = await FacultyModel.findOne({_id: req.body._id})
  if(FacultyExists){
    return res.status(400).json({error:"Faculty member already exists"})
  }
 
  let facultyToAdd = await FacultyModel.create({
    _id: req.body._id,
    faculty_name: req.body.faculty_name,
    department: req.body.department,
    email: req.body.email,
    dob: req.body.dob,
    qualification: req.body.qualification,
    experience: req.body.experience
  })

  if(!facultyToAdd){
    return res.status(400).json({error: "Couldnot add faculty member"})
  }

  res.send({faculty: facultyToAdd,success: true})
}

// get all faculty members list
exports.getAllFaculty = async (req, res) => {
  let faculty = await FacultyModel.find()
    .select("-createdAt")
    .select("-updatedAt")
  if(!faculty){
    return res.status(400).json({error: "Couldnot get all the faculty list"})
  }
  res.send({faculty: faculty, success: true})
}

//get faculty member by id
exports.getFacultyById = async (req, res) => {
  let faculty = await FacultyModel.findById(req.params.id).populate("department")
    .select("-createdAt")
    .select("-updatedAt")
   if(!faculty){
    return res.status(400).json({error: "Couldnot get the faculty member on the list."})
  }
  res.send({faculty: faculty, success: true})


}

//delete faculty member
exports.deletefaculty = async(req, res) =>{
  let facultyToDelete = await FacultyModel.findByIdAndDelete(req.params.id)
  if(!facultyToDelete){
    return res.status(400).json({error: "Department doesnot exists"})
  }
  res.send({message: "Faculty member deleted Successfully", success: true, deleted: facultyToDelete })
}