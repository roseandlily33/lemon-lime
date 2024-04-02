// const passport = require('passport');
// const {Strategy} = require('passport-google-oauth20');
// const cookieSession = require('cookie-session');
// require('dotenv').config()

// const config = {
//     CLIENT_ID: process.env.GOOGLE_AUTH_ID,
//     CLIENT_SECRET: process.env.CLIENT_SECRET,
//     COOKIE_KEY_1: process.env.COOKIE_1,
//     COOKIE_KEY_2: process.env.COOKIE_2
// }
// function verifyCallback(accesToken, refreshToken, profile, done){
//     console.log('Verify Callback', accesToken, refreshToken, profile, done);
//     done(null, profile);
// }



// passport.use(new Strategy({
//     callbackURL: '/auth/google/callback',
//     clientID: config.CLIENT_ID,
//     clientSecret: config.CLIENT_SECRET
// }, verifyCallback ));
// //Save the session to the cookie
// passport.serializeUser((user, done) => {
//     done(null, user);
//     //done(null, user.id);
// });
// //Read the session from the cookie
// passport.deserializeUser((object, done) => {
//     //User.findById(id).then(user => {done(null, user)})
//     done(null, object)
// })

// app.use(cookieSession({
//     name: 'session',
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2]
// }))
// app.use((req, res, next) => {
//     if(req.session && !req.session.regenerate){
//         req.session.regenerate = (cb) => {
//             cb();
//         }
//     }
//     if(req.session && !req.session.save){
//         req.session.save = (cb) => {
//             cb()
//         }
//     }
// })

// app.use(passport.initialize());
// app.use(passport.session());


// function checkLoggedIn(req, res, next){
//     console.log('The current user is', req.user)
//     const isLoggedIn = req.user;
//     if(!isLoggedIn){
//         return res.status(401).json({
//             err: 'You must log in'
//         })
//     }
//     next()
// }

// app.get('/secret', checkLoggedIn, (req, res) => {
//     return res.send('Your secret page')
// })
// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['email']
// }))
// app.get('/auth/google/callback', passport.authenticate('google'), {
//     failureRedirect: '/failure',
//     successRedirect: '/',
//     session: true
// }), (req, res) => {
//     console.log('Google called us back')
// }
// app.get('/auth/logout', (req, res) => {
//     req.logout(err => {
//         if(err){
//             return next(err)
//         }
//         res.redirect('/')
//     }) ; 
// })
// app.get('/failure', (req, res) => {
//    return res.send('Failed to login')
// })