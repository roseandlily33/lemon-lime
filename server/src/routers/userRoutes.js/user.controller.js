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

module.exports = {
    httpCreateRecipe,
}