const User = require('../models/user.mongo');
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  //console.log('USER VERIFICATION STEP 1', req.body, req.cookies)
  const token = req.cookies;
  //console.log('USER VERIFICATION', token);
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      //console.log('ERROR VERIFYING JWt TOKEN')
     return res.json({ status: false })
    } else {
     // console.log('DATA IN USER VER', data);
      const user = await User.findOne({_id: data.id})
      if (user) {
       // console.log('VERIFIED USER', user);
        return res.json({ status: true, user: user.name })
      }
      else return res.json({ status: false })
    }
  })
}