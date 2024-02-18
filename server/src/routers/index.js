const express = require('express');

const {userVerification} = require('../utils/authentication');

const homeRouter = require('./homeRoutes.js/home.router');
const userRouter = require('./userRoutes.js/user.router');

const router = express.Router();
router.use('/home', homeRouter);
router.use('/user', userVerification, userRouter);

module.exports = router;