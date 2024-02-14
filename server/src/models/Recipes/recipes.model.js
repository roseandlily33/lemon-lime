const recipeDB = require('./recipes.mongo');

async function createNewRecipe(recipe){
    console.log(recipe, 'creeeaeting the new recipe', recipe);
    let savedRecipe = await recipeDB.create(recipe);
    console.log('Saved Recipe', savedRecipe);
    return savedRecipe;
}

module.exports = {
    createNewRecipe
}