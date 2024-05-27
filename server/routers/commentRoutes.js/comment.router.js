const commentRouter = require('express').Router();
const {
   httpAddComment,
   httpDeleteComment,
 //  httpGetAllCommentsForRecipe,
   httpEditComment
} = require('./comment.controller');

// comments
//commentRouter.get('/:id', httpGetAllCommentsForRecipe);
commentRouter.post('/add', httpAddComment);
commentRouter.delete('/:id', httpDeleteComment);
commentRouter.put('/:id', httpEditComment)

module.exports = commentRouter;