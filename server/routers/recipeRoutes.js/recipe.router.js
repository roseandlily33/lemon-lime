const express = require('express');
const recipeRouter = express.Router();

const {
    httpGetNewestRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails, 
    httpSearchRecipes
} = require('./recipe.controller');

// recipes/
recipeRouter.get('/', httpGetNewestRecipes);
recipeRouter.get('/popular', httpGetPopularRecipes);
recipeRouter.get('/:id', httpGetFullRecipeWithDetails);
recipeRouter.get('/search/:searchText/:subCategory', httpSearchRecipes);


module.exports = recipeRouter;