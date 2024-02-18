const express = require('express');
const homeRouter = express.Router();
const {
    httpGetAllRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails, 
    httpLoginUser, 
    httpCreateUser,
    httpGetMain
} = require('./home.controller');

// /
homeRouter.get('/', httpGetMain);

homeRouter.get('/recipes', httpGetAllRecipes);

homeRouter.get('/popular', httpGetPopularRecipes);

homeRouter.get('/:id', httpGetFullRecipeWithDetails);

homeRouter.post('/login', httpLoginUser);

homeRouter.post('/create', httpCreateUser);

module.exports = homeRouter;