
module.exports = {
    withAuth: (req, res, next) => {
      if (!req.session.loggedIn) {
        res.redirect('/signin');
      } else {
        next();
      }
    },
    checkAuth: (req, res, next) => {
      req.isAuthenticated = req.session.loggedIn;
      next();
    }
}