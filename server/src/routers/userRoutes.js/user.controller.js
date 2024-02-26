const Recipe = require('../../models/recipes.mongo');
//const jwt = require("jsonwebtoken");
const User = require('../../models/user.mongo');


//User creates a recipe 
async function httpCreateRecipe(req, res){
    console.log( 'USER', req.body.user, 'RECIPE', req.body.recipe)
    try{
      let {sub, nickname, email} = req.body.user;
      let foundUser = await User.findOne({email: email})
      if(foundUser){
        console.log('FOUND USER', foundUser,'ids',foundUser.id, foundUser._id);
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
        let finished = await User.findOneAndUpdate({
          _id: newUser.id}, {
            $addToSet: {recipes: recipe.id}
          }
        );
        console.log('Finished', finished)
        res.status(201).json({msg: 'Created the recipe'})
      }
    } catch(err){
        console.log(err);
        return res.status(404).json({msg: 'Could not create the recipe'})
    }
}

async function httpGetUserRecipes(req, res){
  console.log('HITTING GET USER RECIPES');
    try{
      let userId = req.params.id;
      console.log('Getting for user', userId); 
      let fetchedRecipes = await User.find({authId: userId}).populate("recipes").sort({createdAt: -1});
      console.log('Found these recipes', fetchedRecipes);
      res.status(200).json(fetchedRecipes);
    } catch (err){
      console.log('GETTING USER RECIPES ERR', err);
      return res.status(404).json({msg: "Could not get the recipe"})
    }
}

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

async function httpDeleteRecipe(req, res){
  try{
    console.log('Deleting', req.params.id);
    let id = req.params.id;
    let deletedRecipe = await Recipe.findOneAndDelete({_id: id});
    console.log('Deleted recipe', deletedRecipe);
    res.status(200).json(deletedRecipe);

  } catch(err){
    console.log('ERR DELETING RECIPE', err);
    return res.status(404).json({msg: "Could not delete the recipe"});
  }
}

async function httpAddFavoriteRecipe(req, res){
  try{
    let user = req.body;
    let recipeId = req.params.id
    console.log('For ', user, 'Recipe', recipeId)
  } catch(err){
    console.log('ERR favorite RECIPE', err);
    return res.status(404).json({msg: "Could not favorite the recipe"});
  }
}

async function httpDeleteFavoriteRecipe(req, res){
  try{
    console.log('Deelting a user recpe', req.body)
  } catch(err){
    console.log('ERR favorite deleting RECIPE', err);
    return res.status(404).json({msg: "Could not delete favorite the recipe"});
  }
}


module.exports = {
    httpCreateRecipe,
    httpGetUserRecipes,
    httpEditRecipe,
    httpDeleteRecipe,
    httpAddFavoriteRecipe,
    httpDeleteFavoriteRecipe
}