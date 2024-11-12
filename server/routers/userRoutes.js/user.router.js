const userRouter = require('express').Router();
const {
    httpCreateRecipe,
    httpGetUserRecipes,
    httpEditRecipe,
    httpDeleteRecipe,
    httpAddFavoriteRecipe,
    httpDeleteFavoriteRecipe,
    httpGetEditRecipe,
    httpGetUserComments,
    httpGetUsersFavoriteRecipes,
} = require('./user.controller');

//user/
userRouter.get('/comments/:id', httpGetUserComments);
userRouter.get('/favorites/:userId', httpGetUsersFavoriteRecipes);
userRouter.get('/:id', httpGetUserRecipes);
userRouter.get('/edit/:id', httpGetEditRecipe);
userRouter.post('/', httpCreateRecipe);
userRouter.post('/favorites', httpAddFavoriteRecipe);
userRouter.put('/edit/:id', httpEditRecipe);
userRouter.delete('/recipe/:id', httpDeleteRecipe);
userRouter.delete('/favorites', httpDeleteFavoriteRecipe);

module.exports = userRouter;