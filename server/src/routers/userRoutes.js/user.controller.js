const Recipe = require('../../models/recipes.mongo');
//const jwt = require("jsonwebtoken");
const User = require('../../models/user.mongo');

//User creates a recipe 
async function httpCreateRecipe(req, res){
    try{
      let {sub, nickname, email} = req.body.user;
      let foundUser = await User.findOne({email: email})
      if(foundUser){
          const recipe = await Recipe.create({...req.body.recipe, author: foundUser.id });
          console.log('Recipe created', recipe, 'ids', recipe.id, recipe._id);
          let finished = await User.findOneAndUpdate({
            _id: foundUser.id}, {
              $addToSet: {recipes: recipe.id}
            }
          );
          console.log('Finished Creating recipe', finished)
          res.status(201).json({msg: 'Created the recipe'})
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
        res.status(201).json({msg: 'Created the recipe'})
      }
    } catch(err){
        console.log(err);
        return res.status(404).json({msg: 'Could not create the recipe'})
    }
}
//Gets all of the users recipes
async function httpGetUserRecipes(req, res){
    try{
      let userId = req.params.id;
      let fetchedRecipes = await User.find({authId: userId}).populate("recipes").sort({createdAt: -1});
      res.status(200).json(fetchedRecipes);
    } catch (err){
      console.log('GETTING USER RECIPES ERR', err);
      return res.status(404).json({msg: "Could not get the recipe"})
    }
}
//Edit a user recipe
async function httpEditRecipe(req, res){
  try{
    let editId = req.params.id;
    let recipeBody = req.body;
    let editedRecipe = await Recipe.findOneAndUpdate({_id: editId}, recipeBody, {upsert: true});
    res.status(200).json(editedRecipe);
  }catch(err){
    console.log('Editing error', err)
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
    res.status(200).json(deletedRecipe);
  } catch(err){
   // console.log('ERR DELETING RECIPE', err);
    return res.status(404).json({msg: "Could not delete the recipe"});
  }
}

//Deletes a favorite recipe for a user 
async function httpDeleteFavoriteRecipe(req, res){
  try{
    let userId = req.body.userId;
    let recipeId = req.body.recipeId;
    let oldFavourite = await Recipe.findOneAndUpdate({_id : recipeId}, {$inc: {favorites: -1}});
    await User.findOneAndUpdate({authId: userId}, {
      $pull: {favorites: oldFavourite.id}
    });
    res.status(201).json({msg: 'Removed the favorite recipe'})
  } catch(err){
   console.log('ERR favorite deleting RECIPE', err);
    return res.status(404).json({msg: "Could not delete favorite the recipe"});
  }
}
//Gets a recipe for a user for editing
async function httpGetEditRecipe(req, res){
  try{
    let requestId = req.params.id;
    if(!requestId){
        return res.status(404).json({err: 'Recipe not found'});
    }
    let foundRecipe = await Recipe.find({
        _id: requestId
    }, {'__v': 0});
    res.status(200).json(foundRecipe);
  } catch(err){
    return res.status(404).json({msg: 'Could not edit the recipe'})
  }
}

//Gets the users comments
async function httpGetUserComments(req,res){
  try{
    const commentsForUser = await User.findOne({authId: req.params.id}, {'email': 0, 'recipes': 0, '__v': 0, 'favorites': 0 }).populate('comments');
    res.status(200).json(commentsForUser);
  } catch(err){
    return res.status(404).json({msg: 'Could not find comments'})
  }
}

//Gets the users favorite recipes
async function httpGetUsersFavoriteRecipes(req, res){
  console.log('Gettings users fave recipes', req.params.userId)
  try{
    let userFavorites = await User.findOne({authId: req.params.userId}, {
      'comments': 0, 'email': 0, 'recipes': 0, '__v': 0, 'name': 0
    });
    console.log('Users Faves', userFavorites, userFavorites.favorites)
    // let faveIds = Object.keys(userFavorites.favorites);
    // console.log('FaveIds', faveIds)
    // let faves = await Recipe.find({_id: {$in: faveIds}}).toArray();
    console.log('Users Favorites', faves);
    res.status(200).json(faves);
  } catch(err){
    return res.status(404).json({msg: 'Could not find favorite recipes'})
  }
}

// async function httpGetFavoritesForMainPage(req, res){
//   try{
//     let userFavorites = await User.findOne({authId: req.params.userId}, {
//       'comments': 0, 'email': 0, 'recipes': 0, '__v': 0, 'name': 0
//     }).populate('_id');
//     res.status(200).json(userFavorites);
//   } catch (err){
//     return res.status(404).json({msg: 'Could not find favorite recipes'})
//   }
// }

//Adds a recipe to the users favorites
async function httpAddFavoriteRecipe(req, res){
  try{ 
    let userId = req.body.userId;
    let recipeId = req.body.recipeId;
    console.log('Recipe ID', recipeId)
    await Recipe.findOneAndUpdate({_id : recipeId}, {$inc: {favorites: 1}});
    await User.findOneAndUpdate({authId: userId}, {
     // $set: {favorites: {[`${recipeId}`]: true}}
     $set: {["favorites." + recipeId]: true}
    });
    res.status(201).json({msg: 'Added the new recipe'})
  } catch(err){
    console.log('ERROR', err)
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
   // httpGetFavoritesForMainPage
}