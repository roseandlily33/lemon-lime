const Recipe = require('../../models/recipes.mongo');
const User = require('../../models/user.mongo');

// GET: Gets all of the users recipes 
async function httpGetUserRecipes(req, res){
  try{
    console.log('getting users recipes')
    let userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ msg: 'A User Id is required' });
  }
    let fetchedRecipes;
    if(userId.slice(0,4) === 'auth'){
       fetchedRecipes = await User.find({authId: userId}).populate({path: "recipes", options: {sort: {createdAt: -1}}}).populate({path: "comments", options: {sort: {createdAt: -1}}})
    } else {
       fetchedRecipes = await User.find({_id: userId}).populate({path: "recipes", options: {sort: {createdAt: -1}}}).populate({path: "comments", options: {sort: {createdAt: -1}}})
    }
    if(!fetchedRecipes){
      return res.status(404).json({msg: "Could not get the recipe"})
    }
   // console.log('recipes', fetchedRecipes);
    return res.status(200).json(fetchedRecipes);
  } catch (err){
    console.log('ERROR', err)
    return res.status(500).json({msg: "An error has occured, could not get the recipe"})
  }
};

// GET: Gets a recipe for a user for editing 
async function httpGetEditRecipe(req, res){
  try{
    console.log('Edit a recipe')
    let requestId = req.params.id;
    if(!requestId){
        return res.status(404).json({err: 'Recipe not found'});
    }
    let foundRecipe = await Recipe.find({
        _id: requestId
    }, {'__v': 0});
    if(!foundRecipe){
        return res.status(404).json({err: 'Recipe not found'});
    } ;
    console.log('found recipe', foundRecipe)
    return res.status(200).json(foundRecipe);
  } catch(err){
    console.log('ERROR', err)
    return res.status(500).json({msg: 'An error has occured, could not edit the recipe'})
  }
};


// POST: User creates a recipe 
async function httpCreateRecipe(req, res){
    try{
      console.log('creating a recipe');
      const {sub, nickname, email} = req.body.user;
      const {recipe} = req.body;
      if (!sub || !nickname || !email || !recipe) {
        return res.status(400).json({ msg: 'Invalid input data' });
     }
      let foundUser = await User.findOne({email: email});
      let recipeSending;
      if(foundUser){
          recipeSending = await Recipe.create({...recipe, author: foundUser.id, authorName: foundUser.name});
      } else {
        let newUser = await User.create({
          authId: sub,
          name: nickname,
          email: email
        });
        recipeSending = await Recipe.create({...recipe, author: newUser.id, authorName: newUser.name });
      }
      await User.findOneAndUpdate({
        _id: foundUser.id}, {
          $addToSet: {recipes: recipeSending.id}
        }
      );
      return res.status(201).json({msg: 'Created the recipe'})
    } catch(err){
      console.log('ERROR', err)
        return res.status(500).json({msg: 'An error has occured creating the recipe'})
    }
};


// PUT: Edit a user recipe 
async function httpEditRecipe(req, res){
  try{
    console.log('eiditng a recipe')
    let editId = req.params.id;
    if(!editId){
      return res.status(404).json({msg: "Recipe not found"})
    }
    let recipeBody = req.body;
    console.log('Recipe Body', recipeBody);
    if(!recipeBody){
      return res.status(404).json({msg: "Recipe not found"})
    }
    let editedRecipe = await Recipe.findOneAndUpdate({_id: editId}, recipeBody, {upsert: true});
    console.log('Edited recipe', editedRecipe);
    if(!editedRecipe){
      return res.status(404).json({msg: "Could not edit the recipe"})
    }
    console.log('Edited recipe', editedRecipe); 
    return res.status(200).json(editedRecipe);
  } catch(err) {
    console.log('ERROR', err)
    return res.status(500).json({msg: "An error has occured, could not edit the recipe"})
  }
};

// DELETE: Delete a user recipe 
async function httpDeleteRecipe(req, res){
  try{
    console.log('deleting a recipe')
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({ msg: 'Invalid id' });
  }
    let deletedRecipe = await Recipe.findOneAndDelete({_id: id});
    if(!deletedRecipe){
      return res.status(404).json({msg: "Could not delete the recipe"})
    }
    let userRecipe = await User.findOneAndUpdate({_id: deletedRecipe.author}, {
      $pull: {recipes: id}
    });
    if(!userRecipe){
      return res.status(404).json({msg: "Could not delete the recipe"})
    } 
    console.log('Deleted recipe', deletedRecipe);
    return res.status(200).json(deletedRecipe);
  } catch(err){
    console.log('ERROR', err)
    return res.status(404).json({msg: "Could not delete the recipe"});
  }
};

module.exports = {
    httpCreateRecipe,
    httpGetUserRecipes,
    httpEditRecipe,
    httpDeleteRecipe,
    httpGetEditRecipe,
}