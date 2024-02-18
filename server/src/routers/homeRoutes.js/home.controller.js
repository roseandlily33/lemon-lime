const recipes = require('../../models/recipes.mongo');

const User = require('../../models/user.mongo');
const {createSecretToken} = require('../../utils/jwt');

const mainExcludes = {
    '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0
}
async function httpGetAllRecipes(req, res){
    let allRecipes = await recipes.find({}, { mainExcludes}).sort({createdAt: -1}).limit(6);
    return res.status(200).json(allRecipes)
};

async function httpGetPopularRecipes(req, res){
    let faveRecipes = await recipes.find({}, {
       mainExcludes}).sort({favorites: -1}).limit(6);
    return res.status(200).json(faveRecipes);
}

async function httpGetFullRecipeWithDetails(req, res){
    let requestId = req.params.id;
    if(!requestId){
        return res.status(404).json({err: 'Recipe not found'});
    }
    let foundRecipe = await recipes.find({
        _id: requestId
    }, {'__v': 0});
    console.log('Returning 1 recipe', foundRecipe);
    return res.status(200).json(foundRecipe);
}
//Login the user
async function httpLoginUser (req, res){
    try{
     const {email, password} = req.body;
     if(!email || !password){
         res.status(400).json({err: 'Must include all the fields'});
     }
     const userData = await User.findOne({email: email});
     const validPassword = userData.isCorrectPassword(password);
     if(!validPassword){
         res.status(400).json({err: 'Error with credentials'});
     } 
     const token = createSecretToken(userData.id);
     console.log('THE TOKEN', token);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res.status(200).json(userData);
    } catch(err){
     console.log('There was an error siging in', err)
      res.status(400).json(err)
    }
 }
 //Create the User
 async function httpCreateUser(req, res){
     console.log('CREATING THE USER', req.body);
     if(!req.body){
         res.status(400).json({msg: 'Cannot create user'})
     };
     const {name, email, password} = req.body;
     const userFound = await User.findOne({
         name,
         email,
         password
     });
     if(userFound){
         res.status(404).json({msg: 'User has been found'})
     }
     const userData = await User.create({
         name,
         email,
         password
     });
     const token = createSecretToken(userData.id);
     res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
 }

module.exports = {
    httpGetAllRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails,
}