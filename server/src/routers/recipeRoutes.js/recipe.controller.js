// const recipes = require('../../models/Recipes/recipes.mongo');
// const mainExcludes = {
//     '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0
// }

// async function httpGetAllRecipes(req, res){
//     let allRecipes = await recipes.find({}, { mainExcludes}).sort({createdAt: -1}).limit(6);
//     return res.status(200).json(allRecipes)
// };

// async function httpGetPopularRecipes(req, res){
//     let faveRecipes = await recipes.find({}, {
//        mainExcludes}).sort({favorites: -1}).limit(6);
//     return res.status(200).json(faveRecipes);
// }

// async function httpGetFullRecipeWithDetails(req, res){
//     let requestId = req.params.id;
//     if(!requestId){
//         return res.status(404).json({err: 'Recipe not found'});
//     }
//     let foundRecipe = await recipes.find({
//         _id: requestId
//     }, {'__v': 0});
//     console.log('Returning 1 recipe', foundRecipe);
//     return res.status(200).json(foundRecipe);
// }

// module.exports = {
//     httpGetAllRecipes,
//     httpGetPopularRecipes,
//     httpGetFullRecipeWithDetails,
// }