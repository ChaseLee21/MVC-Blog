// setting up the routes for the application
const router = require('express').Router();

// routes for the api
const apiRoutes = require('./api');
// routes for the homepage
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
