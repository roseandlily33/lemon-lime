const commentRouter = require('express').Router();
const {
   httpAddComment,
   httpDeleteComment,
   httpGetAllCommentsForRecipe
} = require('./comment.controller');

// comments
commentRouter.get('/:id', httpGetAllCommentsForRecipe);
commentRouter.post('/add', httpAddComment);
commentRouter.delete('/:id', httpDeleteComment);

module.exports = commentRouter;