const express = require('express');
const userRouter = express.Router();
const {httpLoginUser, httpCreateRecipe, httpCreateUser} = require('./user.controller');

userRouter.post('/login', httpLoginUser);
userRouter.post('/create', httpCreateUser);
userRouter.post('/', httpCreateRecipe);


module.exports = userRouter;