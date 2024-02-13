const recipes = require('../../models/Recipes/recipes.mongo');
async function httpGetAllRecipes(req, res){
    let allRecipes = await recipes.find({}, {
        '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0
    }).sort({createdAt: -1}).limit(6);
    return res.status(200).json(allRecipes)
};

async function httpGetPopularRecipes(req, res){
    let faveRecipes = await recipes.find({}, {
        '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0
    }).sort({favorites: 1}).limit(6);
    return res.status(200).json(faveRecipes);
}

module.exports = {
    httpGetAllRecipes,
    httpGetPopularRecipes
}