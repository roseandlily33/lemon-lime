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
commentRouter.put('/:id', httpEditComment)
commentRouter.delete('/:id', httpDeleteComment);

module.exports = commentRouter;