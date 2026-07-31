const { resetPassword } = require('../controllers/userController')
const User = require('../models/UserModel')

//login check
exports.isLoggedIn = async (req, res) => {
  //check if token is available or not
  const token = req.headers['authorization']?.split(' ')[1]
  if (!token) {
    return res.status(400).json({ error: "Login required." })
  }

  //verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
      return res.status(400).json({ error: "Invalid token!." })
    }
    const user = await User.findById(decoded.id).select("-password")
    if(!user){
      return res.status(400).json({error: "User not found"})
    }
    next()
  }
  catch(err){
    return res.status(400).json({error: "Invlaid token"})
  }
}