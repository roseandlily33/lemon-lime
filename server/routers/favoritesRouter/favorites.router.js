const express = require('express');
const favoriteRouter = express.Router();

const {
    httpAddFavoriteRecipe,
    httpDeleteFavoriteRecipe,
    httpGetUsersFavoriteRecipes
} = require('./favorites.controller');
const checkJwt = require('../../utils/authentication');

//avoriteRouter.use(checkJwt);
// favorites/
favoriteRouter.get('/:userId', httpGetUsersFavoriteRecipes);
favoriteRouter.post('/', httpAddFavoriteRecipe);
favoriteRouter.delete('/', httpDeleteFavoriteRecipe);

module.exports = favoriteRouter;