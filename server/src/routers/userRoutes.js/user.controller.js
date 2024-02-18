const Recipe = require('../../models/recipes.mongo');

//User creates a recipe 
async function httpCreateRecipe(req, res){
    console.log(req.body, req.body.id, req.body.recipe)
    let recipe = req.body;
    console.log('Creating ', recipe);
    if(!recipe){
        res.status(400).json({err: 'Missing information'})
    } 
    let savedRecipe = await Recipe.create(recipe);
     res.status(201).json(savedRecipe);
}

module.exports = {
    httpCreateRecipe,
}