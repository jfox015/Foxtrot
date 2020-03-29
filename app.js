/**
 *  FOXTROT
 *  
 *  Built on NodeJs, with Express, Pug Templates, Mongo and Angular Front End. 
 *  A derivitive of the the excellent Hackathon Starter Project 
 *  (https://github.com/sahat/hackathon-starter). Thanks also to JasonWatmore.com 
 *  for the Angular Login/Auth example. 
 *  (https://github.com/AureGitHub/angular2-registration-login-example-master)
 *  
 *  @author Jeff Fox (jfox015)
 *
 *  @changeLog
 *  
 *  -- Feb 13 2019 -- Upgraded to Angular 7.2.4 and rxjs 6
 *  -- Feb 17 2020 -- Upgraded to Angular 9.1
 *  -- Mar 05 2020 -- Version 1.0 complete
 *  -- Mar 28 2020 -- Directory/file cleanup
 *  
 *  The MIT License (MIT)
 *  
 *  Copyright (c) 2018-20 Jeff Fox
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *  
 */
 /**
 * Module dependencies.
 */
const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const sass = require('node-sass-middleware');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, 'uploads') });
const i18n = require('i18n-2');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env.example' });

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('%s MongoDB connection established!', chalk.green('✓'));
});
i18n.expressBind(app, {
    locales: ['en'],
    cookieName: 'locale',
    directory: __dirname + '/locales'
});

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'scss'),
  dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

var Settings = require(__dirname + '/models/Settings');
app.use(function (req, res, next) {
    Settings.find(function(err, settingsObj) {
        if (err) return next(err);
        var copyDate = new Date();
        if (!settingsObj[0]) {
          res.locals = {
              site: {
                  siteName: "Foxtrot",
                  ownerName: "Jeff Fox @jfox015",
                  siteYear: copyDate.getFullYear()
              },
              user: req.user
          };
        } else {
          req.settings = settingsObj[0];
          res.locals = {
              site: {
                  siteName: settingsObj[0].siteName,
                  ownerName: settingsObj[0].ownerName,
                  siteYear: copyDate.getFullYear()
              },
              user: req.user
          };
        };
        next();
    });
   res.locals.user = req.user;
});
app.use(function(req, res, next) {
  // After successful login, redirect back to the intended page
  if (!req.user &&
      req.path !== '/login' &&
      req.path !== '/signup' &&
      !req.path.match(/^\/auth/) &&
      !req.path.match(/\./)) {
    req.session.returnTo = req.path;
  }
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use(express.static(path.join(__dirname, 'node_modules'), { maxAge: 31557600000 }));

app.use(cookieParser());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(function (req, res, next) {
    if (req.path === '/api/upload') {
      next();
    } else {
      lusca.csrf( { angular: true, cookie: "XSRF-TOKEN"})(req, res, next);
    }
});
app.use(function (req, res, next) {
    res.cookie("XSRF-TOKEN",req.csrfToken());
    return next();
});

/**-----------------------------------
/ APP ROUTES
/-----------------------------------*/
require('./config/routes')(app, { dest: path.join(__dirname, 'uploads') });

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});

module.exports = app;
