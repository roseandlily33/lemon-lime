const Recipe = require('../../models/recipes.mongo');
const User = require('../../models/user.mongo');


// GET: Gets the users favorite recipes 
async function httpGetUsersFavoriteRecipes(req, res){
    try{
      console.log('GETTING FAVORITES')
      const userId = req.params.userId;
      if(!userId){
        return res.status(404).json({msg: 'Could not find favorite recipes'})
      }
      let foundUserFaves;
      if(userId.slice(0,4) === 'auth'){
         foundUserFaves = await User.findOne({authId: userId}, {favorites: true});
      } else {
         foundUserFaves = await User.findOne({_id: userId}, {favorites: true});
      }
      const favorites = foundUserFaves.favorites;
      if(!favorites)  return res.status(404).json({msg: 'Could not find favorite recipes'})
      const faveIds = Array.from(foundUserFaves.favorites.keys());
      if(faveIds.length === 0) return res.status(200).json({favorites: [], favoriteRecipes: []});
      const favoriteRecipes = await Recipe.find({_id: {$in: faveIds}} , {
        '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 'author': 0
      });
      if(!favoriteRecipes) return res.status(404).json({msg: 'Could not find favorite recipes'});
     // console.log('FAVORITES', favorites, 'Fave recipes', favoriteRecipes)
      return res.status(200).json({favorites, favoriteRecipes});
    } catch(err){
      console.log('ERROR', err)
      return res.status(500).json({msg: 'An error has occured, could not find favorite recipes'})
    }
  };

// PUT: Adds a recipe to the users favorites - NOT VERIEIFED FUNCTIONALITY
async function httpAddFavoriteRecipe(req, res){
    try{ 
      console.log('Adding faves')
      const userId = req.body.userId;
      const recipeId = req.body.recipeId;
      if(!userId || !recipeId){
        return res.status(404).json({msg: 'Could not add a favorite recipe'})
      }
      const user = await User.findOne({ authId: userId });
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      const isFavorite = user.favorites.has(recipeId);
      if (isFavorite) {
        return res.status(400).json({ msg: 'Recipe is already a favorite' });
      }
      await Recipe.findOneAndUpdate({_id : recipeId}, {$inc: {favorites: 1}});
      await User.findOneAndUpdate({authId: userId}, {
        $set: {["favorites." + recipeId]: ''}
      });
      return res.status(201).json({msg: 'Added the new recipe'})
    } catch(err){
      console.log('ERROR', err)
      return res.status(500).json({msg: 'An error has occured, could not add a favorite recipe'})
    }
  };

// DELETE: Deletes a favorite recipe for a user 
async function httpDeleteFavoriteRecipe(req, res){
    try{
      console.log('Deleting recipe')
      let userId = req.body.userId;
      let recipeId = req.body.recipeId;
      console.log('Req body', req.body);
      console.log('USERID', userId, 'RECIPEID', recipeId);
      if(!userId || !recipeId){
        console.log('Missing item')
        return res.status(404).json({msg: "Could not delete favorite the recipe"});
      }
      let user = await User.findOne({authId: userId});
      if (!user) {
        console.log('User not found');
        return res.status(404).json({ msg: 'User not found' });
      } else {
         await Recipe.findOneAndUpdate({_id : recipeId}, {$inc: {favorites: -1}});
         await User.findOneAndUpdate({authId: userId}, {
          $unset: {["favorites." + recipeId]: ''}
        });
      console.log('Removed the favorite recipe')
      }
      return res.status(201).json({msg: 'Removed the favorite recipe'})
    } catch(err){
      console.log('ERROR', err)
      return res.status(500).json({msg: "An error has occured"});
    }
  };

  module.exports = {
    httpAddFavoriteRecipe,
    httpDeleteFavoriteRecipe,
    httpGetUsersFavoriteRecipes
  }