const commentRouter = require('express').Router();
const {
   httpAddComment,
   httpDeleteComment,
 //  httpGetAllCommentsForRecipe,
   httpEditRecipe
} = require('./comment.controller');

// comments
//commentRouter.get('/:id', httpGetAllCommentsForRecipe);
commentRouter.post('/add', httpAddComment);
commentRouter.delete('/:id', httpDeleteComment);
commentRouter.put('/:id', httpEditRecipe)

module.exports = commentRouter;