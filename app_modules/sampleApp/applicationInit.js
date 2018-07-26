var express = require('express');
var path = require('path');
var application = AppModules.require('application/applicationInit');

function ApplicationInit () {

  var extendedApp = application();

  extendedApp.use(express.static(path.join(Application.dirpath, 'dist/base-mean-app')));
  extendedApp.use('/', express.static(path.join(Application.dirpath, 'dist/base-mean-app')));

  var apiRoute = Routes.require(process.env.API_ROUTE);
  extendedApp.use('/api', apiRoute);

  return extendedApp;
}

console.log('sampleApp application extensions complete...');

module.exports = ApplicationInit;
