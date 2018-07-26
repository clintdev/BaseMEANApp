var express = require('express');

// Basic stuff needed for barebones express app
var createError = require('http-errors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');


function ExpressExtension () {

  var app = express();

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));

  expressApp.app.use(express.static(path.join(Application.dirpath, 'dist/base-mean-app')));
  expressApp.app.use('/', express.static(path.join(Application.dirpath, 'dist/base-mean-app')));

  var apiRoute = Routes.require(process.env.API_ROUTE);
  expressApp.app.use('/api', apiRoute);


  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
  });
}

console.log('base express extensions complete...');

module.exports = express;
