const commentRouter = require('express').Router();
// const checkJwt = require('../../utils/authentication');
const {
   httpAddComment,
   httpDeleteComment,
 //  httpGetAllCommentsForRecipe,
   httpEditComment,
   httpGetUserComments
} = require('./comment.controller');

// comments
commentRouter.get('/:id', httpGetUserComments);
commentRouter.post('/add', httpAddComment);
commentRouter.put('/:id', httpEditComment)
commentRouter.delete('/:id',  httpDeleteComment);

module.exports = commentRouter;