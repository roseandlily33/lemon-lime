const express = require('express');

const homeRouter = require('./homeRoutes.js/home.router');
const userRouter = require('./userRoutes.js/user.router');

const router = express.Router();
router.use('/home', homeRouter);
router.use('/user',  userRouter);

module.exports = router;