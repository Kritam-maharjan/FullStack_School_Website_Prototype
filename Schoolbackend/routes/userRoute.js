const { register, verifyEmail, resendVerification, forgetPassword, resetPassword, getAllUsers, getUserDetail, deleteUser, login } = require('../controllers/userController')

const router = require('express').Router()

router.post('/register', register)
router.get('/verify/:token', verifyEmail)
router.post('/resendverification', resendVerification)
router.post('/forgetpassword', forgetPassword)
router.post('/resetpassword/:token', resetPassword)

router.get('/getallusers', getAllUsers)
router.get('/getuserdetail/:email', getUserDetail)
router.delete('/deleteuser/:email', deleteUser)

router.post('/login', login)
module.exports = router