const userRouter = require('express').Router();
const {
    httpCreateRecipe,
    httpGetUserRecipes,
    //httpEditRecipe
} = require('./user.controller');

//user/
userRouter.post('/', httpCreateRecipe);
userRouter.get('/:id', httpGetUserRecipes);
//userRouter.put('/recipe/:id', httpEditRecipe)

module.exports = userRouter;