const userRouter = require('express').Router();
const {httpCreateRecipe} = require('./user.controller');

//user/
userRouter.post('/', httpCreateRecipe);


module.exports = userRouter;