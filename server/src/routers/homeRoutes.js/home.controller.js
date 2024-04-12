const Recipe = require('../../models/recipes.mongo');
const User = require('../../models/user.mongo');
//const {createSecretToken} = require('../../utils/jwt');
//const generateToken = require('../../utils/newjwt');

//Gets nothing
async function httpGetMain(req, res){
    try{
        console.log('Getting the main', req.body)
        return res.status(200).json({msg: 'Welcome'})
    }catch(err){
        console.log(err);
        return res.status(400).json({msg: "error in get"})
    }
}
//Gets all of the recipes for the main page the newest 6
async function httpGetAllRecipes(req, res){
   try{
    let allRecipes = await Recipe.find({}, {
        '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 
    }).sort({createdAt: -1}).allowDiskUse(true).limit(8);
    return res.status(200).json(allRecipes)
   } catch(err){
    console.log('ERERR',err);
    return res.status(400).json(err);
   }
};
//Gets the most popular recipes the top 6
async function httpGetPopularRecipes(req, res){
    try{
        let faveRecipes = await Recipe.find({}, {
            '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 
        }).sort({favorites: -1}).allowDiskUse(true).limit(8);
         return res.status(200).json(faveRecipes);
    }catch(err){
        console.log('ERERR',err);
        return res.status(400).json(err);
    }
}
//Gets the full recipe with details
async function httpGetFullRecipeWithDetails(req, res){
    console.log('GETTING THE ONE RECIPE WITH DETAILS')
    try{
        let requestId = req.params.id;
    if(!requestId){
        return res.status(404).json({err: 'Recipe not found'});
    }
    let foundRecipe = await Recipe.find({
        _id: requestId
    }, {'__v': 0});
    let authorOfRecipe = await User.findOne({_id: foundRecipe[0].author});
    // console.log('Author', authorOfRecipe, authorOfRecipe)
    return res.status(200).json({foundRecipe, authorOfRecipe});
    }catch(err){
        console.log('ERERR',err);
        return res.status(400).json(err);
       }
}
// //Login the user = not in use
async function httpLoginUser (req, res){
    console.log('LOGGIN IN THE USER')
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
     const sendingData = [
        userData.id,
        userData.name
     ];
     //console.log('SENDING DATA', sendingData);
     const token = createSecretToken(userData.id);
     console.log('Created token', token)
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      return res.status(201).json({ message: "User logged in successfully", success: true, token: token, userData: sendingData });
    } catch(err){
      return res.status(400).json(err)
    }
 }

 //Create the User - not in use
 async function httpCreateUser(req, res){
     console.log('CREATING THE USER', req.body);
     try{
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
        const sendingData = [
            userData.id,
            userData.name
        ];
        if(userData){
            generateToken(res,userData.id );
            res.status(201).json({message: 'Logged in', success: true, userData: userData})
        }

        // const token = createSecretToken(userData.id);
        // console.log('Created token', token)
        // res.cookie("token", token, {
        //     withCredentials: true,
        //     httpOnly: false,
        //   });
        // return res.status(201).json({ message: "User logged in successfully", success: true, token: token, userData: sendingData });
     }
     catch(err){
        console.log('ERERR',err);
        return res.status(400).json(err);
       }
 }

 async function httpSearchRecipes(req, res){
    console.log('HTTP SEARCHING RECIPES', req.params.searchText);
    try{
        const searchingFor = req.params.searchText.toLowerCase();
        const foundRecipes = await Recipe.find({recipeName: {$regex: searchingFor}});
        res.status(200).json(foundRecipes);
    } catch(err){
      return  res.status(400).json({msg: "Cannot search for recipes"})
    }
 }

module.exports = {
    httpGetAllRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails,
    httpLoginUser,
    httpCreateUser,
    httpGetMain,
    httpSearchRecipes
}