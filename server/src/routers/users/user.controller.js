const {
    createNewRecipe
} = require('../../models/Recipes/recipes.model');
const User = require('../../models/Users/user.mongo');
// const { signToken } = require('../../utils/jwt');
const {createSecretToken} = require('../../utils/jwt');

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
    //res.status(201).json({userData, token});
    res.status(201).json({ message: "User logged in successfully", success: true });
    next()
}
//User creates a recipe 
async function httpCreateRecipe(req, res){
    console.log(req.body, req.body.id, req.body.recipe)
    let recipe = req.body;
    console.log('Creating ', recipe);
    if(!recipe){
        return res.status(400).json({err: 'Missing information'})
    }
   // await createNewRecipe(recipe);
    return res.status(201).json("Created Recipe")
}

module.exports = {
    httpLoginUser,
    httpCreateRecipe,
    httpCreateUser
}