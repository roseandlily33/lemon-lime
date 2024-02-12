const express = require('express');
const userRouter = express.Router();
const {httpGetUser, httpCreateRecipe} = require('./user.controller');

userRouter.get('/', httpGetUser);
userRouter.post('/', httpCreateRecipe);


module.exports = userRouter;