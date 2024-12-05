const Recipe = require('../../models/recipes.mongo');
const User = require('../../models/user.mongo');
const Comment = require('../../models/comments.mongo');

// GET: Gets all of the recipes for the main page the newest 6 
async function httpGetNewestRecipes(req, res){
   try{
    const allRecipes = await Recipe.find({}, {
        '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 'author': 0
    }).sort({createdAt: -1}).limit(6);
    if(!allRecipes){
        return res.status(404).json({msg: "Could not get the recipes"});
    }
    return res.status(200).json(allRecipes)
   } catch(err){
    return res.status(500).json({msg: "An error has occured, could not get the recipes"});
   }
};

// GET: Gets the most popular recipes the top 6 
async function httpGetPopularRecipes(req, res){
    try{
        const faveRecipes = await Recipe.find({}, {
            '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 'author': 0
        }).sort({favorites: -1}).limit(6);
        if(!faveRecipes){
            return res.status(404).json({msg: "Could not get the recipes"});
        }
        return res.status(200).json(faveRecipes);
    }catch(err){
        return res.status(500).json({msg: "An error has occured, could not get the most popular recipes"});
    }
}

//GET: Gets the full recipe with details 
async function httpGetFullRecipeWithDetails(req, res){
    try {
    const requestId = req.params.id;
    if(!requestId){
        return res.status(404).json({err: 'Recipe id is needed'});
    }
    const foundRecipe = await Recipe.find({
        _id: requestId
    }, {'__v': 0});
    if(!foundRecipe){
        return res.status(404).json({err: 'Recipe not found'});
    }
    const authorOfRecipe = await User.findOne({_id: foundRecipe[0].author});
    if(!authorOfRecipe){
        return res.status(404).json({err: 'Author not found'});
    }
    // No check for all comments because there may not be any
    const allComments = await Comment.find({recipe: requestId}).sort({createdAt: -1});
    return res.status(200).json({foundRecipe, authorOfRecipe, allComments});
    } catch(err){
        return res.status(400).json(err);
    }
}

// GET: Searches for a recipe based on criteria given 
 async function httpSearchRecipes(req, res){
    try{
        const searchingFor = req.params.searchText.toLowerCase();
        const subCat = req.params.subCategory;
        if(!searchingFor){
            return res.status(400).json({msg: "No search criteria given"});
        }
        if(!subCat){
            return res.status(400).json({msg: "No sub category given"});
        }
        let foundRecipes;
        if(subCat === 'All'){
           foundRecipes = await Recipe.find({recipeName: {$regex: searchingFor}}, {
            '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 'author': 0
        });
        } else {
           foundRecipes = await Recipe.find({$and : [{recipeName: {$regex: searchingFor}}, {subCategory: subCat}]}, {
            '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 'author': 0
        });
        }
        if(!foundRecipes){
            return res.status(404).json({msg: "Could not find any recipes"});
        }
        return res.status(200).json(foundRecipes);
    } catch(err){
        return res.status(500).json({msg: "An error has occured, cannot search for recipes"})
    }
 }

module.exports = {
    httpGetNewestRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails,
    httpSearchRecipes
}