const express = require('express');
require('dotenv').config()
require('./database/connection')

const departmentRoutes = require('./routes/departmentRoute')
const facultyRoutes = require('./routes/facultyRoute')
const noticeRoutes = require('./routes/noticeRoute')
const newsRoutes = require('./routes/newsRoute')
const userRoutes = require('./routes/userRoute')




const app = express()

// middleware
app.use(express.json())

// routes/endpoints
app.use(departmentRoutes)
app.use(facultyRoutes)
app.use(noticeRoutes)
app.use(newsRoutes)
app.use(userRoutes)




app.listen(process.env.PORT, () => {
  console.log("Application started successfully at PORT ", process.env.PORT)
})