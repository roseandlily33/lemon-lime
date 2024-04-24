const Recipe = require('../../models/recipes.mongo');
const User = require('../../models/user.mongo');
const Comment = require('../../models/comments.mongo');

//Gets all of the recipes for the main page the newest 6 - finished
async function httpGetNewestRecipes(req, res){
   try{
    let allRecipes = await Recipe.find({}, {
        '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 'author': 0
    }).sort({createdAt: -1}).limit(6);
    //.allowDiskUse(true)
    return res.status(200).json(allRecipes)
   } catch(err){
    console.log('ERERR',err);
    return res.status(400).json(err);
   }
};
//Gets the most popular recipes the top 6 - finished
async function httpGetPopularRecipes(req, res){
    try{
        let faveRecipes = await Recipe.find({}, {
            '__v': 0, 'ingredients': 0, 'prepTime':0, 'cookTime': 0, 'instructions': 0, 'comments': 0, 'author': 0
        }).sort({favorites: -1}).limit(6);
        //.allowDiskUse(true)
         return res.status(200).json(faveRecipes);
    }catch(err){
        console.log('ERERR',err);
        return res.status(400).json(err);
    }
}

//Gets the full recipe with details - finished
async function httpGetFullRecipeWithDetails(req, res){
    try{
        let requestId = req.params.id;
    if(!requestId){
        return res.status(404).json({err: 'Recipe not found'});
    }
    let foundRecipe = await Recipe.find({
        _id: requestId
    }, {'__v': 0});
    let authorOfRecipe = await User.findOne({_id: foundRecipe[0].author});
    let allComments = await Comment.find({recipe: requestId}).sort({createdAt: -1});
    return res.status(200).json({foundRecipe, authorOfRecipe, allComments});
    } catch(err){
        return res.status(400).json(err);
    }
}
// //Login the user = not in use
// async function httpLoginUser (req, res){
//     console.log('LOGGIN IN THE USER')
//     try{
//      const {email, password} = req.body;
//      if(!email || !password){
//          res.status(400).json({err: 'Must include all the fields'});
//      }
//      const userData = await User.findOne({email: email});
//      const validPassword = userData.isCorrectPassword(password);
//      if(!validPassword){
//          res.status(400).json({err: 'Error with credentials'});
//      } 
//      const sendingData = [
//         userData.id,
//         userData.name
//      ];
//      //console.log('SENDING DATA', sendingData);
//      const token = createSecretToken(userData.id);
//      console.log('Created token', token)
//       res.cookie("token", token, {
//         withCredentials: true,
//         httpOnly: false,
//       });
//       return res.status(201).json({ message: "User logged in successfully", success: true, token: token, userData: sendingData });
//     } catch(err){
//       return res.status(400).json(err)
// //     }
// //  }

//  //Create the User - not in use
//  async function httpCreateUser(req, res){
//      console.log('CREATING THE USER', req.body);
//      try{
//         if(!req.body){
//             res.status(400).json({msg: 'Cannot create user'})
//         };
//         const {name, email, password} = req.body;
//         const userFound = await User.findOne({
//             name,
//             email,
//             password
//         });
//         if(userFound){
//             res.status(404).json({msg: 'User has been found'})
//         }
//         const userData = await User.create({
//             name,
//             email,
//             password
//         });
//         const sendingData = [
//             userData.id,
//             userData.name
//         ];
//         if(userData){
//             generateToken(res,userData.id );
//             res.status(201).json({message: 'Logged in', success: true, userData: userData})
//         }

//         // const token = createSecretToken(userData.id);
//         // console.log('Created token', token)
//         // res.cookie("token", token, {
//         //     withCredentials: true,
//         //     httpOnly: false,
//         //   });
//         // return res.status(201).json({ message: "User logged in successfully", success: true, token: token, userData: sendingData });
//      }
//      catch(err){
//         console.log('ERERR',err);
//         return res.status(400).json(err);
//        }
//  }

//Searches for a recipe based on criteria given - finished
 async function httpSearchRecipes(req, res){
    console.log('HTTP SEARCHING RECIPES', req.params.searchText, req.params.subCategory);
    try{
        const searchingFor = req.params.searchText.toLowerCase();
        const subCat = req.params.subCategory;
        let foundRecipes;
        if(subCat === 'All'){
           foundRecipes = await Recipe.find({recipeName: {$regex: searchingFor}});
           console.log('Option 1', foundRecipes)
        } else {
           foundRecipes = await Recipe.find({$and : [{recipeName: {$regex: searchingFor}}, {subCategory: subCat}]});
           console.log('Option 2', foundRecipes)
        }
        console.log('Found these recipes', foundRecipes);
        return res.status(200).json(foundRecipes);
    } catch(err){
      return  res.status(400).json({msg: "Cannot search for recipes"})
    }
 }

module.exports = {
    httpGetNewestRecipes,
    httpGetPopularRecipes,
    httpGetFullRecipeWithDetails,
    //httpLoginUser,
    //httpCreateUser,
    httpSearchRecipes
}