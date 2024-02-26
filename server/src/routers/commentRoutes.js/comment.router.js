const commentRouter = require('express').Router();
const {
   httpAddComment,
   httpDeleteComment,
   httpGetAllCommentsForRecipe
} = require('./comment.controller');

// comment
commentRouter.get('/', httpGetAllCommentsForRecipe);
commentRouter.post('/', httpAddComment);
commentRouter.delete('/', httpDeleteComment);

module.exports = commentRouter;