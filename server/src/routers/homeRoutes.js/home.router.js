const homeRouter = require('express').Router();
const {httpGetAllRecipes, httpGetFullRecipeWithDetails, httpGetPopularRecipes, httpLoginUser, httpLoginUser} = require('./recipes.controller');

// /
homeRouter.get('/', httpGetAllRecipes);
homeRouter.get('/popular', httpGetPopularRecipes);
homeRouter.get('/:id', httpGetFullRecipeWithDetails);
homeRouter.post('/login',httpLoginUser )
homeRouter.post('/create', httpLoginUser);


module.exports = homeRouter;