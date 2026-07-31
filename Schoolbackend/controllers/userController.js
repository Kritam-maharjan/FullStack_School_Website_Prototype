const UserModel = require('../models/UserModel')
const TokenModel = require('../models/TokenModel')

const bcrypt = require('bcrypt')
const saltRounds = 5
const crypto = require('crypto')
const sendEmail = require('../utils/emailSender')

const jwt = require('jsonwebtoken')

//register
exports.register = async (req, res) => {
  //check email registered or not
  let emailToRegister = await UserModel.findOne({ email: req.body.email })
  if (emailToRegister) {
    return res.status(400).json({ error: "Email already registered." })
  }

  //encrypt password
  let salt = await bcrypt.genSalt(saltRounds)
  let hashedPassword = await bcrypt.hash(req.body.password, salt)

  // save in db 
  emailToRegister = await UserModel.create({
    email: req.body.email,
    password: hashedPassword,
    department: req.body.department
  })
  if (!emailToRegister) {
    return res.status(400).json({ error: "Couldnot register." })
  }

  //verification Token
  let token = await TokenModel.create({
    userId: emailToRegister._id,
    token: crypto.randomBytes(32).toString('hex')
  })

  //send verification link
  const VERIFICARION_URL = `http://localhost:5000/verify/${token.token}`

  sendEmail({
    from: "noreply@egschool.com",
    to: emailToRegister.email,
    subject: "Email verification",
    text: `Please click on the link to verify your email ${VERIFICARION_URL}`,
    html: `<a href= '${VERIFICARION_URL}'><button>VERIFY YOUR ACCOUNT </button></a>`
  })

  //send msg to user
  res.send({ message: "User registered successfully" })
}

//verify email
exports.verifyEmail = async (req, res) => {
  //take token from the url
  let token = req.params.token
  //check if token is valid or not
  let tokenObj = await TokenModel.findOne({ token: token })

  if (!tokenObj) {
    return res.status(400).json({ error: "Invalid token or token expired." })
  }

  //find user associated with token
  let user = await UserModel.findById(tokenObj.userId)

  if (!user) {
    return res.status(400).json({ error: "User not found" })
  }

  //check if user is verified or not
  if (user.isVerified) {
    return res.status(400).json({ error: "Account already verified" })
  }

  //verify user
  user.isVerified = true
  user = await user.save()

  if (!user) {
    return res.status(400).json({ error: "Something went wrong" })
  }

  //send msg to user
  res.send({ message: "Account Verified Successfully" })
}

// resend verification
exports.resendVerification = async (req, res) => {
  //check if email is registered or not
  let user = await UserModel.findOne({ email: req.body.email })
  if (!user) {
    return res.status(400).json({ error: "Email not registered" })

  }
  //check is acc is verified
  if (user.isVerifiedd) {
    return res.status(400).json({ error: "Account already verified." })
  }
  //generate token
  let tokenObj = await TokenModel.create({
    token: crypto.randomBytes(32).toString('hex'),
    userId: user._id
  })
  if (!tokenObj) {
    return res.status(400).json({ error: "Token couldnot be generated" })
  }
  //send verification link
  const VERIFICARION_URL = `http://localhost:5000/verify/${tokenObj.token}`

  sendEmail({
    from: "noreply@egschool.com",
    to: user.email,
    subject: "Email verification",
    text: `Please click on the link to verify your email ${VERIFICARION_URL}`,
    html: `<a href= '${VERIFICARION_URL}'><button>VERIFY YOUR ACCOUNT </button></a>`
  })

  //send msg to user
  res.send({ message: "Verification link send to your email" })
}

//forget password
exports.forgetPassword = async (req, res) => {
  //check if email is registered or not
  let user = await UserModel.findOne({ email: req.body.email })
  if (!user) {
    return res.status(400).json({ error: "Email not registered" })
  }

  //generate password reset token
  let tokenObj = await TokenModel.create({
    token: crypto.randomBytes(32).toString('hex'),
    userId: user._id
  })
  if (!tokenObj) {
    return res.status(400).json({ error: "Something went wrong" })
  }

  //send token in email
  const VERIFICATION_URL = `http://localhost:5000/resetpassword/${tokenObj.token}`

  sendEmail({
    from: "noreply@egschool.com",
    to: user.email,
    subject: "Reset Password",
    text: `Click here to change your password ${VERIFICATION_URL}`,
    html: `<a href='${VERIFICATION_URL}'><button>CHANGE PASSWORD</button></a`
  })

  //send msg to user
  res.send({ message: "Email sent to change your password" })
}

//reset password
exports.resetPassword = async (req, res) => {
  //take token from the url
  let token = req.params.token
  //check if token is valid or not
  let tokenObj = await TokenModel.findOne({ token: token })

  if (!tokenObj) {
    return res.status(400).json({ error: "Invalid token or token expired." })
  }

  //find user associated with token
  let user = await UserModel.findById(tokenObj.userId)

  if (!user) {
    return res.status(400).json({ error: "User not found" })
  }

  //hash password
  let salt = await bcrypt.genSalt(saltRounds)
  let hashedPassword = await bcrypt.hash(req.body.password, salt)
  
  //update password
  user.password = hashedPassword
  user = await user.save()

  //verify user
  user.isVerified = true
  user = await user.save()

  if (!user) {
    return res.status(400).json({ error: "Something went wrong" })
  }

  //send msg to user
  res.send({ message: "Password changed Successfully" })
}

//get all users 
exports.getAllUsers = async(req, res) => {
  let users= await UserModel.find()
    .select("-password")
    .select("-createdAt")
    .select("-updatedAt")
    .sort({username: 1})
  if(!users){
    return res.status(400).json({error:"Couldnot get users"})
  }
  res.send({users: users, success: true})
}

//get user details
exports.getUserDetail = async(req, res) => {
  let user = await UserModel.findOne({email: req.params.email})
    .select("-password")
    .select("-createdAt")
    .select("-updatedAt")
    .populate('department')
  if(!user){
    return res.status(400).json({error:"Couldnot get users"})
  }
  res.send({user: user, success: true})

}

//delete user
exports.deleteUser = async(req, res) => {
  // find by email and delete
  let user = await UserModel.findOneAndDelete({ email: req.params.email })
  if(!user){
    return res.status(400).json({ error: `Could not get user with ${req.params.email}` })
  }
  res.send({ Deleted: user, success: true })
}

//login user 
exports.login = async(req, res) => {
  const {email, password} = req.body
  
  //if email is registered or not
  let user = await UserModel.findOne({email: email})
  if(!user){
    return res.status(400).json({error: "Email not found."})
  }

  //check password
  let isMatch = await bcrypt.compare(password, user.password) 
  if(!isMatch){
    return res.status(400).json({error: "Invalid password."})
  }

  //is verified or not
  if(!user.isVerified){
    return res.status(400).json({error: "Please verify your account first."})
  }

  //login token
  let token = jwt.sign({
    id: user._id,
    email: user.email,
    role: user.role
  }, process.env.JWT_SECRET, {expiresIn: "7d"})

  //set token
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7*24*60*1000 //7 days
  }) 

  //send token, msg to the user
  res.send({message: "Login Successful", token: token, success:true})
}