const express = require('express');
const homeRouter = express.Router();
const {
    httpGetAllRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails, 
    httpLoginUser, 
    httpCreateUser,
    httpGetMain,
    httpSearchRecipes
} = require('./home.controller');

//const {userVerification } = require('../../utils/authentication');

// /
homeRouter.get('/', httpGetMain);
homeRouter.get('/recipes', httpGetAllRecipes);
homeRouter.get('/popular', httpGetPopularRecipes);
homeRouter.get('/:id', httpGetFullRecipeWithDetails);
homeRouter.get('/search/:searchText', httpSearchRecipes);
homeRouter.post('/login', httpLoginUser);
homeRouter.post('/create', httpCreateUser);

module.exports = homeRouter;