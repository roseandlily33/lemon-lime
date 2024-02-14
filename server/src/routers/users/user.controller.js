const {
    createNewRecipe
} = require('../../models/Recipes/recipes.model');
const { getTotalTime} = require('../../models/Users/user.model');

function httpGetUser(req, res){
    console.log('Getting the user');
    return res.status(200).json({ msg: 'Got the user'})
}

async function httpCreateRecipe(req, res){
    let recipe = req.body;
    console.log('Creating ', recipe);
    if(!recipe){
        return res.status(400).json({err: 'Missing information'})
    }
    await createNewRecipe(recipe);
    return res.status(201).json("Created Recipe")
}

module.exports = {
    httpGetUser,
    httpCreateRecipe
}