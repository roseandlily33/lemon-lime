const express = require('express');
const favoriteRouter = express.Router();

const {
    httpAddFavoriteRecipe,
    httpDeleteFavoriteRecipe,
    httpGetUsersFavoriteRecipes
} = require('./favorites.controller');

// favorites/
favoriteRouter.get('/:userId', httpGetUsersFavoriteRecipes);
favoriteRouter.post('/', httpAddFavoriteRecipe);
favoriteRouter.delete('/', httpDeleteFavoriteRecipe);

module.exports = favoriteRouter;