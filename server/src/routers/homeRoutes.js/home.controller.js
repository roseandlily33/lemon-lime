const recipes = require('../../models/recipes.mongo');

const User = require('../../models/user.mongo');
//const {createSecretToken} = require('../../utils/jwt');
const generateToken = require('../../utils/newjwt');

const mainExcludes = {
    '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0
}
async function httpGetMain(req, res){
    try{
        console.log('Getting the main', req.body)
        return res.status(200).json({msg: 'Welcome'})
    }catch(err){
        console.log(err);
        return res.status(400).json({msg: "error in get"})
    }
}
async function httpGetAllRecipes(req, res){
   console.log('GETTING ALL THE RECIPES')
   try{
    let allRecipes = await recipes.find({}, { mainExcludes}).sort({createdAt: -1}).limit(6);
    return res.status(200).json(allRecipes)
   } catch(err){
    console.log('ERERR',err);
    return res.status(400).json(err);
   }
};

async function httpGetPopularRecipes(req, res){
    console.log('GETTING ALL THE POPULAR RECIPES')
    try{
        let faveRecipes = await recipes.find({}, {
            mainExcludes}).sort({favorites: -1}).limit(6);
         return res.status(200).json(faveRecipes);
    }catch(err){
        console.log('ERERR',err);
        return res.status(400).json(err);
    }
}

async function httpGetFullRecipeWithDetails(req, res){
    console.log('GETTING THE ONE RECIPE WITH DETAILS')
    try{
        let requestId = req.params.id;
    if(!requestId){
        return res.status(404).json({err: 'Recipe not found'});
    }
    let foundRecipe = await recipes.find({
        _id: requestId
    }, {'__v': 0});
    return res.status(200).json(foundRecipe);
    }catch(err){
        console.log('ERERR',err);
        return res.status(400).json(err);
       }
}
// //Login the user
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
     console.log('SENDING DATA', sendingData);
     const token = createSecretToken(userData.id);
     console.log('Created token', token)
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      return res.status(201).json({ message: "User logged in successfully", success: true, token: token, userData: sendingData });
    } catch(err){
     console.log('There was an error siging in', err)
      return res.status(400).json(err)
    }
 }

 //Create the User
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

module.exports = {
    httpGetAllRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails,
    httpLoginUser,
    httpCreateUser,
    httpGetMain

}