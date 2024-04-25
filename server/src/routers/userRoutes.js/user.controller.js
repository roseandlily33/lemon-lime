const Recipe = require('../../models/recipes.mongo');
const User = require('../../models/user.mongo');

//User creates a recipe - finished
async function httpCreateRecipe(req, res){
    try{
      let {sub, nickname, email} = req.body.user;
      let foundUser = await User.findOne({email: email})
      if(foundUser){
          const recipe = await Recipe.create({...req.body.recipe, author: foundUser.id });
          await User.findOneAndUpdate({
            _id: foundUser.id}, {
              $addToSet: {recipes: recipe.id}
            }
          );
          return res.status(201).json({msg: 'Created the recipe'})
      } else {
        let newUser = await User.create({
          authId: sub,
          name: nickname,
          email: email
        });
        const recipe = await Recipe.create({...req.body.recipe, author: newUser.id });
        await User.findOneAndUpdate({
          _id: newUser.id}, {
            $addToSet: {recipes: recipe.id}
          }
        );
        return res.status(201).json({msg: 'Created the recipe'})
      }
    } catch(err){
        return res.status(404).json({msg: 'Could not create the recipe'})
    }
}
//Gets all of the users recipes - finished
async function httpGetUserRecipes(req, res){
    try{
      let userId = req.params.id;
      let fetchedRecipes = await User.find({authId: userId}).populate("recipes").sort({createdAt: -1});
      return res.status(200).json(fetchedRecipes);
    } catch (err){
      return res.status(404).json({msg: "Could not get the recipe"})
    }
}
//Edit a user recipe - finished
async function httpEditRecipe(req, res){
  try{
    let editId = req.params.id;
    let recipeBody = req.body;
    let editedRecipe = await Recipe.findOneAndUpdate({_id: editId}, recipeBody, {upsert: true});
    return res.status(200).json(editedRecipe);
  } catch(err) {
    return res.status(404).json({msg: "Could not edit the recipe"})
  }
}
//Delete a user recipe - finished
async function httpDeleteRecipe(req, res){
  try{
    let id = req.params.id;
    let deletedRecipe = await Recipe.findOneAndDelete({_id: id});
    await User.findOneAndUpdate({_id: deletedRecipe.author}, {
      $pull: {recipes: id}
    });
    return res.status(200).json(deletedRecipe);
  } catch(err){
    return res.status(404).json({msg: "Could not delete the recipe"});
  }
}

//Deletes a favorite recipe for a user -finished
async function httpDeleteFavoriteRecipe(req, res){
  try{
    let userId = req.body.userId;
    let recipeId = req.body.recipeId;
    let found = await User.findOne({$and : [{authId: userId}, {["favorites." + recipeId]: {$exists: true}}]});
    if(found){
       await Recipe.findOneAndUpdate({_id : recipeId}, {$inc: {favorites: -1}});
       await User.findOneAndUpdate({authId: userId}, {
        $unset: {["favorites." + recipeId]: ''}
      });
    } else {
      return;
    }
    return res.status(201).json({msg: 'Removed the favorite recipe'})
  } catch(err){
    return res.status(404).json({msg: "Could not delete favorite the recipe"});
  }
}
//Gets a recipe for a user for editing - Finished
async function httpGetEditRecipe(req, res){
  try{
    let requestId = req.params.id;
    if(!requestId){
        return res.status(404).json({err: 'Recipe not found'});
    }
    let foundRecipe = await Recipe.find({
        _id: requestId
    }, {'__v': 0});
    return res.status(200).json(foundRecipe);
  } catch(err){
    return res.status(404).json({msg: 'Could not edit the recipe'})
  }
}

//Gets the users comments - Finished
async function httpGetUserComments(req,res){
  try{
    //let userId = req.params.id;
    const commentsForUser = await User.findOne({authId: req.params.id}, {'email': 0, 'recipes': 0, '__v': 0, 'favorites': 0 }).populate('comments');
   // const recipes = await Recipe.find({})
    return res.status(200).json(commentsForUser);
  } catch(err){
    return res.status(404).json({msg: 'Could not find comments'})
  }
}

//Gets the users favorite recipes - Finished
async function httpGetUsersFavoriteRecipes(req, res){
 // console.log('Getting the users fave recipes')
  try{
    let userId = req.params.userId;
    let foundUserFaves = await User.findOne({authId: userId}, {favorites: true});
    let favorites = foundUserFaves.favorites;
    let faveIds = Array.from(foundUserFaves.favorites.keys());
    const favoriteRecipes = await Recipe.find({_id: {$in: faveIds}} , {
      '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 'author': 0
  });
    return res.status(200).json({favorites, favoriteRecipes});
  } catch(err){
    return res.status(404).json({msg: 'Could not find favorite recipes'})
  }
}

//Adds a recipe to the users favorites ???
async function httpAddFavoriteRecipe(req, res){
  console.log('ADDING A NEW FAVORITE ')
  try{ 
    let userId = req.body.userId;
    let recipeId = req.body.recipeId;
    let found = await User.findOne({$and : [{authId: userId}, {
      ["favorites." + recipeId]: {$exists: true}
    }]});
    if(found){
      return;
    } else {
     await Recipe.findOneAndUpdate({_id : recipeId}, {$inc: {favorites: 1}});
     await User.findOneAndUpdate({authId: userId}, {
       $set: {["favorites." + recipeId]: true}
      });
    }
    return res.status(201).json({msg: 'Added the new recipe'})
  } catch(err){
    return res.status(404).json({msg: 'Could not add a favorite recipe'})
  }
}

module.exports = {
    httpCreateRecipe,
    httpGetUserRecipes,
    httpEditRecipe,
    httpDeleteRecipe,
    httpAddFavoriteRecipe,
    httpDeleteFavoriteRecipe,
    httpGetEditRecipe,
    httpGetUserComments,
    httpGetUsersFavoriteRecipes,
}