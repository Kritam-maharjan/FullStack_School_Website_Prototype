const express = require('express');
const { addNotice, getAllNotice, deleteNotice } = require('../controllers/noticeController');

const router = express.Router();

router.post('/addnotice', addNotice)
router.get('/getallnotice', getAllNotice)
router.delete('/deletenotice/:id', deleteNotice)



module.exports = router
