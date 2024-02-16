const {
    createNewRecipe
} = require('../../models/Recipes/recipes.model');
const bcrypt = require('bcrypt');
const User = require('../../models/Users/user.mongo');

//Login the user
async function httpLoginUser(req, res){
   try{
    const {email, password} = req.body;
    if(!email || !password){
        //  res.status(400).json({err: 'Must include all the fields'});
         return;
    }
    const userData = await User.findOne({email: email});
    const validPassword = userData.isCorrectPassword(password);
    if(!validPassword){
        //  res.status(400).json({err: 'Error with credentials'});
         return;
    }
    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json(userData);
      });
   // res.redirect('/');
    console.log('Signed in', req.session, req.session.user_id)
   } catch(err){
    console.log('ERRRRRR', err)
    res.status(400).json(err);
   }
}
//Create the User
async function httpCreateUser(req, res){
   try{
    if(!req.body){
        return res.status(400).json({msg: 'Cannot create user'})
    };
    const {name, email, password} = req.body;
    const user = await User.create({
        name,
        email,
        password
    });
    req.session.save(() => {
        req.session.userId = user.id;
        req.session.loggedIn = true;
        res.json(user);
    });
    res.redirect('/');
   } catch(err){
    return res.status(400).json({err: 'Couldnt sign up'})
   }
}
//User creates a recipe 
async function httpCreateRecipe(req, res){
    let recipe = req.body;
    console.log('Creating ', recipe);
    if(!recipe){
        return res.status(400).json({err: 'Missing information'})
    }
    await createNewRecipe(recipe);
    return res.status(201).json("Created Recipe")
}

module.exports = {
    httpLoginUser,
    httpCreateRecipe,
    httpCreateUser
}