const commentRouter = require('express').Router();
const {
   httpAddComment,
   httpDeleteComment,
   httpGetAllCommentsForRecipe
} = require('./comment.controller');

// comment
commentRouter.get('/:id', httpGetAllCommentsForRecipe);
commentRouter.post('/', httpAddComment);
commentRouter.delete('/:id', httpDeleteComment);

module.exports = commentRouter;