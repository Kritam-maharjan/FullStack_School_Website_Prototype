const DepartmentModel = require('../models/DepartmentModel')

//add department
exports.addDepartment = async(req, res) => {s
  let departmentExist = await DepartmentModel.findOne({department_name: req.body.department_name})
  if(departmentExist){
    return res.status(400).json({error: "Department already exists"})
  }

  let departmentToAdd = await DepartmentModel.create({
    department_name: req.body.department_name
  })

  if(!departmentToAdd){
    return res.status(400).json({error: "Couldnot add department"})
  }

  res.send({department: departmentToAdd, success: true})
}

//delete department
exports.deleteDepartment = async(req, res) =>{
  let departmentToDelete = await DepartmentModel.findByIdAndDelete(req.params.id)
  if(!departmentToDelete){
    return res.status(400).json({error: "Department doesnot exists"})
  }
  res.send({message: "Category deleted Successfully", success: true, deleted: departmentToDelete })
}

// Get All Departmentlist
exports.getAllDepartment = async(req, res) =>{
  let department = await DepartmentModel.find()
  if(!department){
    return res.status(400).json({error: "Something went wrong"})
  }
  res.send({departments: department, success: true})
}