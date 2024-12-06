const express = require('express');

const recipeRouter = require('./recipeRoutes.js/recipe.router');
const userRouter = require('./userRoutes.js/user.router');
const commentRouter = require('./commentRoutes.js/comment.router');
const favoriteRouter = require('./favoritesRouter/favorites.router');

const router = express.Router();
router.use('/recipes', recipeRouter);
router.use('/user',  userRouter);
router.use('/comments', commentRouter);
router.use('/favorites', favoriteRouter);

module.exports = router;