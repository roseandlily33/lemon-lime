const userRouter = require('express').Router();
const {
    httpCreateRecipe,
    httpGetUserRecipes
} = require('./user.controller');

//user/
userRouter.post('/', httpCreateRecipe);
userRouter.get('/:id', httpGetUserRecipes);


module.exports = userRouter;