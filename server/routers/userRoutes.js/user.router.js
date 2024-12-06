const userRouter = require('express').Router();
//const checkJwt = require('../../utils/authentication');
const {
    httpCreateRecipe,
    httpGetUserRecipes,
    httpEditRecipe,
    httpDeleteRecipe,
    httpGetEditRecipe,
} = require('./user.controller');

//Implement later
//userRouter.use(checkJwt);
// user/
userRouter.get('/:id', httpGetUserRecipes);
userRouter.get('/edit/:id', httpGetEditRecipe);
userRouter.post('/', httpCreateRecipe);
userRouter.put('/edit/:id', httpEditRecipe);
userRouter.delete('/recipe/:id', httpDeleteRecipe);

module.exports = userRouter;