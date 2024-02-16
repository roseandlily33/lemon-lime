const recipeDB = require('./recipes.mongo');

async function createNewRecipe(recipe){
    let savedRecipe = await recipeDB.create(recipe);
    return savedRecipe;
}

module.exports = {
    createNewRecipe
}