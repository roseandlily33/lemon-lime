const userRouter = require('express').Router();
const {
    httpCreateRecipe,
    httpGetUserRecipes,
    httpEditRecipe,
    httpDeleteRecipe,
    httpAddFavoriteRecipe,
    httpDeleteFavoriteRecipe,
    httpGetEditRecipe
} = require('./user.controller');

//user/
userRouter.post('/', httpCreateRecipe);
userRouter.get('/:id', httpGetUserRecipes);
userRouter.get('/edit/:id', httpGetEditRecipe);
userRouter.put('/edit/:id', httpEditRecipe);
userRouter.delete('/recipe/:id', httpDeleteRecipe);
userRouter.post('/favorites/:id', httpAddFavoriteRecipe);
userRouter.delete('/favorites/:id', httpDeleteFavoriteRecipe);

module.exports = userRouter;