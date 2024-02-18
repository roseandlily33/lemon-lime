const express = require('express');
const userRouter = express.Router();
const {httpLoginUser, httpCreateRecipe, httpCreateUser} = require('./user.controller');
const {userVerification} = require('../../utils/authentication');

//user/
userRouter.post('/login', httpLoginUser);
userRouter.post('/create', httpCreateUser);
userRouter.post('/',userVerification, httpCreateRecipe);


module.exports = userRouter;