const express = require('express');
const recipesRouter = express.Router();
const {httpGetAllRecipes} = require('./recipes.controller');

recipesRouter.get('/', httpGetAllRecipes);

module.exports = recipesRouter;