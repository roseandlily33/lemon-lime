const userRouter = require('express').Router();
const {
    httpCreateRecipe,
    httpGetUserRecipes,
    httpEditRecipe,
    httpDeleteRecipe
} = require('./user.controller');

//user/
userRouter.post('/', httpCreateRecipe);
userRouter.get('/:id', httpGetUserRecipes);
userRouter.put('/recipe/:id', httpEditRecipe);
userRouter.delete('/recipe/:id', httpDeleteRecipe);

module.exports = userRouter;