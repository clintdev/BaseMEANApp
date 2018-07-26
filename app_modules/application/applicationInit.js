var express = AppModules.require('express');
// Basic stuff needed for barebones express app
var createError = require('http-errors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

function ApplicationInit () {

  var application = express();

  application.use(logger('dev'));
  application.use(express.json());
  application.use(express.urlencoded({extended: false}));

  application.use(express.static(path.join(Application.dirpath, 'dist/base-mean-app')));
  application.use('/', express.static(path.join(Application.dirpath, 'dist/base-mean-app')));

  var apiRoute = Routes.require(process.env.API_ROUTE);
  application.use('/api', apiRoute);

  // catch 404 and forward to error handler
  application.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  application.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
  });

  return application;
}

console.log('base application extensions complete...');

module.exports = ApplicationInit;
