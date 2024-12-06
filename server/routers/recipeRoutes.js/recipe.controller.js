const Recipe = require('../../models/recipes.mongo');

// GET: Gets all of the recipes for the main page the newest 6 
async function httpGetNewestRecipes(req, res){
   try{
    console.log('getting the newest recipes')
    const allRecipes = await Recipe.find({}, {
        '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 'author': 0
    }).sort({createdAt: -1}).limit(6);
    if(!allRecipes){
        return res.status(404).json({msg: "Could not get the recipes"});
    }
    //console.log('newest recipes', allRecipes);
    return res.status(200).json(allRecipes)
   } catch(err){
    console.log('ERROR', err)
    return res.status(500).json({msg: "An error has occured, could not get the recipes"});
   }
};

// GET: Gets the most popular recipes the top 6 
async function httpGetPopularRecipes(req, res){
    try{
        const popularRecipes = await Recipe.find({}, {
            '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 'author': 0
        }).sort({favorites: -1}).limit(6);
        if(!popularRecipes){
            return res.status(404).json({msg: "Could not get the recipes"});
        }
       // console.log('popular recipes', popularRecipes);
        return res.status(200).json(popularRecipes);
    } catch(err){
        console.log('ERROR', err)
        return res.status(500).json({msg: "An error has occured, could not get the most popular recipes"});
    }
}

//GET: Gets the full recipe with details 
async function httpGetFullRecipeWithDetails(req, res){
    try {
        console.log('Getting full recipe with details')
    const requestId = req.params.id;
    if(!requestId){
        return res.status(404).json({err: 'Recipe id is needed'});
    }
    const foundRecipe = await Recipe.find({
        _id: requestId
    }, {'__v': 0}).populate('comments');
    console.log('FOUND RECIPES with comments', foundRecipe);
    if(!foundRecipe){
        return res.status(404).json({err: 'Recipe not found'});
    }
    console.log('Found recipes', foundRecipe)
    return res.status(200).json(foundRecipe);
    } catch(err){
        console.log('ERROR', err)
        return res.status(400).json(err);
    }
};

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
 };

module.exports = {
    httpGetNewestRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails,
    httpSearchRecipes
};