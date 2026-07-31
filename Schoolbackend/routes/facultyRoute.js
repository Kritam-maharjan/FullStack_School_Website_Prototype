const express = require('express');
const { addFaculty, getAllFaculty, deletefaculty, getFacultyById } = require('../controllers/facultyController');

const router = express.Router();

router.post('/addfaculty', addFaculty)
router.get('/getallfaculty', getAllFaculty)
router.get('/getfacultybyid/:id', getFacultyById)

router.delete('/deletefaculty/:id', deletefaculty)



module.exports = router