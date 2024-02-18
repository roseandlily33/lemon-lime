const router = require('express').Router();
const {userVerification} = require('../utils/authentication');
const homeRoutes = require('./homeRoutes.js/home.router.js');
const userRoutes = require('./homeRoutes.js/home.router.js');
router.use('/', homeRoutes);
router.use('/user', userVerification, userRoutes)

module.exports = router;