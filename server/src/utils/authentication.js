const User = require('../models/Users/user.mongo');
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  console.log('USER VERIFICATION', token);
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      console.log('DATA IN USER VER', data);
      const user = await User.findOne({_id: data.id})
      if (user) {
        console.log('VERIFIED USER', user);
        return res.json({ status: true, user: user.name })
      }
      else return res.json({ status: false })
    }
  })
}