const express = require('express');

const homeRouter = require('./homeRoutes.js/home.router');
const userRouter = require('./userRoutes.js/user.router');
const commentRouter = require('./commentRoutes.js/comment.router');

const router = express.Router();
router.use('/home', homeRouter);
router.use('/user',  userRouter);
router.use('/comments', commentRouter);

module.exports = router;