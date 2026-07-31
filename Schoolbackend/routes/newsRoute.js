const express = require('express')
const { addNews, getAllNews, deletenews } = require('../controllers/newsController')
const { isLoggedIn } = require('../utils/authentication')

const router = express.Router()

router.post('/addnews', isLoggedIn, addNews)
router.get('/getallnews', getAllNews)
router.delete('/deletenews/:id', isLoggedIn, deletenews)




module.exports = router