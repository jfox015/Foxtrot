const passport = require('passport');
const passportConfig = require('./passport');
const multer = require('multer');

/**
 * Controllers (route handlers).
 */
const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const foxtrotController = require('../controllers/foxtrot');
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
	
};	