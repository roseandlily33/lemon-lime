const commentRouter = require('express').Router();
const checkJwt = require('../../utils/authentication');
const {
   httpAddComment,
   httpDeleteComment,
 //  httpGetAllCommentsForRecipe,
   httpEditComment,
   httpGetUserComments
} = require('./comment.controller');

// comments
commentRouter.get('/:id', httpGetUserComments);
commentRouter.post('/add', checkJwt, httpAddComment);
commentRouter.put('/:id', checkJwt, httpEditComment)
commentRouter.delete('/:id', checkJwt, httpDeleteComment);

module.exports = commentRouter;