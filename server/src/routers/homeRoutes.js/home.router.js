const express = require('express');
const homeRouter = express.Router();

const {
    httpGetNewestRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails, 
    //httpLoginUser, 
    //httpCreateUser,
    httpSearchRecipes
} = require('./home.controller');

homeRouter.get('/recipes', httpGetNewestRecipes);
homeRouter.get('/popular', httpGetPopularRecipes);
homeRouter.get('/:id', httpGetFullRecipeWithDetails);
homeRouter.get('/search/:searchText/:subCategory', httpSearchRecipes);
//homeRouter.post('/login', httpLoginUser);
//homeRouter.post('/create', httpCreateUser);

module.exports = homeRouter;