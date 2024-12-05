const express = require('express');
const recipeRouter = express.Router();

const {
    httpGetNewestRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails, 
    httpSearchRecipes
} = require('./recipe.controller');

// recipe/
recipeRouter.get('/', httpGetNewestRecipes);
recipeRouter.get('/popular', httpGetPopularRecipes);
recipeRouter.get('/:id', httpGetFullRecipeWithDetails);
recipeRouter.get('/search/:search-text/:sub-category', httpSearchRecipes);


module.exports = recipeRouter;