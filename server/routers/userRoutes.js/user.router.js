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
userRouter.post('/', httpCreateRecipe);
userRouter.get('/:id', httpGetUserRecipes);
userRouter.get('/edit/:id', httpGetEditRecipe);
userRouter.put('/edit/:id', httpEditRecipe);
userRouter.delete('/recipe/:id', httpDeleteRecipe);
userRouter.delete('/favorites', httpDeleteFavoriteRecipe);
userRouter.get('/comments/:id', httpGetUserComments);
userRouter.get('/favorites/:userId', httpGetUsersFavoriteRecipes);
userRouter.post('/favorites', httpAddFavoriteRecipe);

module.exports = userRouter;