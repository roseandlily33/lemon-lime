const {
    createNewRecipe
} = require('../../models/Recipes/recipes.model');
const bcrypt = require('bcrypt');
const User = require('../../models/Users/user.mongo');

//Login the user
async function httpLoginUser(req, res){
   try{
    console.log('Logging in the user', req.body);
    const {email, password} = req.body;
    // if(!email || !password){
    //     return res.status(400).json({err: 'Must include all the fields'});
    // }
    const user = await User.findOne({where: {email: email}});
    console.log('THE FOUND USER', user)
    const validPassword = await bcrypt.compareSync(password, user.password);
    if(!validPassword){
        return res.status(400).json({err: 'Error with credentials'});
    }
    await req.session.save(() => {
        req.session.userId = user.id;
        req.session.loggedIn = true;
        res.json({user: user, message: 'You are now logged in'});
    })
    return res.status(201).json(user)
   } catch(err){
    console.log(err, 'Couldnt login user');
    return res.status(400).json({err: 'Couldnt login user'})
   }
}
//Create the User
async function httpCreateUser(req, res){
   try{
    if(!req.body){
        return res.status(400).json({msg: 'Cannot create user'})
    }
    const user = await User.create(req.body);
    req.session.save(() => {
        req.session.userId = user.id;
        req.session.loggedIn = true;
        res.status(200).json(user);
    });
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