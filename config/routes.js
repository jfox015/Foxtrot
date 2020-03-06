const passport = require('passport');
const passportConfig = require('./passport');
const multer = require('multer');

/**
 * Controllers (route handlers).
 */
const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const foxtrotController = require('../controllers/foxtrot');

var adminController = require('../controllers/admin/admin');
var settingsController = require('../controllers/admin/settings');
/**
 * ROUTES
 * 
 * @param Express App app
 * @package config.routes
 */
module.exports = function(app, destObj){

	const upload = multer(destObj);
	/**
	 * Primary app routes.
	 */
	app.get('/', homeController.index);

	app.post('/api/authenticate', userController.apiLogin);
	app.route('/api/users')
		.get(userController.getUsers)
		.post(userController.postSignup);

	app.put('/api/:id/users', userController.putUpdateProfile);

	app.route('/api/:id/wallet/:coin')
		.get(foxtrotController.getWallet)
		.post(foxtrotController.createWallet);
	app.get('/api/:id/wallet/balance/:coin', foxtrotController.getBalance);
	app.get('/api/transactions/:address', foxtrotController.getTransactions);
	app.post('/api/:id/transactions/post/:coin', foxtrotController.sendCoin);
	app.post('/api/:id/exchange/post', foxtrotController.exchangeCoin);
	app.get('/api/:id/portfolio/:cache', foxtrotController.getPortfolio);

	app.get('/api/coins', foxtrotController.getCoins);
	app.get('/api/currencies', foxtrotController.getCurrencies);
	app.get('/api/currency/:symbol', foxtrotController.getCurrency);
	app.get('/api/blockchain', foxtrotController.getBlockChain);
	app.get('/api/exchange/:symbol/:from', foxtrotController.getExchangeTable);
	app.get('/api/exchangerates', foxtrotController.getAllExchangeRates);
	app.get('/api/exchangerates/:symbol/:cache', foxtrotController.getExchangeRates);
	app.get('/api/exchangerate/:symbol/:from', foxtrotController.getExchangeRate);

	app.get('/api/seed/:id', foxtrotController.seed);

	// ACOUNT/USER URLs
	
	app.get('/admin/', userController.getLogin);
	app.post('/admin/signin', userController.postSignin);
	app.get('/admin/signout', userController.adminLogout);
	app.get('/admin/forgot', userController.getForgot);
	app.post('/admin/forgot', userController.postForgot);
	app.get('/admin/reset/:token', userController.getReset);
	app.post('/admin/reset/:token', userController.postReset);
	//app.get('/signup', userController.getSignup);
	//app.post('/signup', userController.postSignup);
	//app.get('/contact', contactController.getContact);
	//app.post('/contact', contactController.postContact);
	//app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
	//app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
	//app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
	//app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);
	/*
	/**
	 * API examples routes.
	 
	app.get('/api', apiController.getApi);
	app.get('/api/lastfm', apiController.getLastfm);
	app.get('/api/nyt', apiController.getNewYorkTimes);
	app.get('/api/aviary', apiController.getAviary);
	app.get('/api/steam', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getSteam);
	app.get('/api/stripe', apiController.getStripe);
	app.post('/api/stripe', apiController.postStripe);
	app.get('/api/scraping', apiController.getScraping);
	app.get('/api/twilio', apiController.getTwilio);
	app.post('/api/twilio', apiController.postTwilio);
	app.get('/api/clockwork', apiController.getClockwork);
	app.post('/api/clockwork', apiController.postClockwork);
	//app.get('/api/foursquare', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFoursquare);
	app.get('/api/tumblr', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTumblr);
	app.get('/api/facebook', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);
	//app.get('/api/github', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getGithub);
	app.get('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTwitter);
	app.post('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postTwitter);
	app.get('/api/linkedin', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getLinkedin);
	app.get('/api/instagram', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getInstagram);
	app.get('/api/paypal', apiController.getPayPal);
	app.get('/api/paypal/success', apiController.getPayPalSuccess);
	app.get('/api/paypal/cancel', apiController.getPayPalCancel);
	app.get('/api/lob', apiController.getLob);
	app.get('/api/upload', apiController.getFileUpload);
	app.post('/api/upload', upload.single('myFile'), apiController.postFileUpload);
	app.get('/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getPinterest);
	app.post('/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postPinterest);
	app.get('/api/google-maps', apiController.getGoogleMaps);
	*/
	/**
	 * OAuth authentication routes. (Sign in)
	 
	app.get('/auth/instagram', passport.authenticate('instagram'));
	app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), (req, res) => {
	  res.redirect(req.session.returnTo || '/');
	});
	app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
	app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
	  res.redirect(req.session.returnTo || '/');
	});
	/*app.get('/auth/github', passport.authenticate('github'));
	app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
	  res.redirect(req.session.returnTo || '/');
	});
	app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
	app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
	  res.redirect(req.session.returnTo || '/');
	});
	app.get('/auth/twitter', passport.authenticate('twitter'));
	app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
	  res.redirect(req.session.returnTo || '/');
	});
	app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
	app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), (req, res) => {
	  res.redirect(req.session.returnTo || '/');
	});
	*/
	/**
	 * OAuth authorization routes. (API examples)
	 */
	/*app.get('/auth/foursquare', passport.authorize('foursquare'));
	app.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), (req, res) => {
	  res.redirect('/api/foursquare');
	});
	app.get('/auth/tumblr', passport.authorize('tumblr'));
	app.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), (req, res) => {
	  res.redirect('/api/tumblr');
	});
	app.get('/auth/steam', passport.authorize('openid', { state: 'SOME STATE' }));
	app.get('/auth/steam/callback', passport.authorize('openid', { failureRedirect: '/login' }), (req, res) => {
	  res.redirect(req.session.returnTo || '/');
	});
	app.get('/auth/pinterest', passport.authorize('pinterest', { scope: 'read_public write_public' }));
	app.get('/auth/pinterest/callback', passport.authorize('pinterest', { failureRedirect: '/login' }), (req, res) => {
	  res.redirect('/api/pinterest');
	});
	*/
    /*--------------------------------------------------------
    /	USER ACCOUNT API
    /-------------------------------------------------------*/
    //app.get('/api/account/status', userController.getLoggedInStatus);

     /*------------------------------------------
    /   ADMINISTRATIVE DASHBOARD
    /   Authentication is required for all paths
    /------------------------------------------*/
    app.get('/admin/account', passportConfig.isAuthenticated, userController.getAccount);
	
	app.get('/admin/dashboard', passportConfig.isAuthenticated, adminController.index);
    
    // USERS (AUTHENTICATED ONLY)
    app.route('/admin/users')
    	.all(passportConfig.isAuthenticated)       
    	.get(userController.getUserList);
    /*app.route('/admin/settings')
            .all(passportConfig.isAuthenticated)
            .get(settingsController.getSettings)
            .post(settingsController.postSettings);
	*/
};	