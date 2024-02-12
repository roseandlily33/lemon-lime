const express = require('express');
const recipesRouter = require('./recipes/recipes.router');
const userRouter = require('./users/user.router');
const api = express.Router();

api.use('/recipes', recipesRouter);
api.use('/user', userRouter);

module.exports = api;