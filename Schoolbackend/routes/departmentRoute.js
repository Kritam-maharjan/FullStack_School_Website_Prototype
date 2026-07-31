const express = require('express');

const { addDepartment, deleteDepartment, getAllDepartment } = require('../controllers/departmentController');


const router = express.Router();

router.post('/adddepartment', addDepartment)
router.get('/getalldepartment', getAllDepartment)
router.delete('/deletedepartment/:id', deleteDepartment)

module.exports = router