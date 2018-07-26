var minimist = require('minimist');
var dotenv = require('dotenv');

function ContextExtension() {

  global.context = context = {};

  // Command line arguments
  context.argv = argv = minimist(process.argv.slice(2));

  // env variables
  context.env = process.env;

  // Setup global directories for relative requires to load from
  global.Application = context.Application = Application = {};
  Application.dirpath = __dirname + '/../..';
  Application.require = function (name) {
    return require(Application.dirpath + '/' + name);
  }

  global.Lib = context.Lib = Lib = {};
  Lib.dirpath = __dirname + '/../../lib';
  Lib.require = function (name) {
    return require(Lib.dirpath + '/' + name);
  }

  global.Models = context.Models = Models = {};
  Models.dirpath = __dirname + '/../../models';
  Models.require = function (name) {
    return require(Models.dirpath + '/' + name);
  }

  global.Routes = context.Routes = Routes = {};
  Routes.dirpath = __dirname + '/../../routes';
  Routes.require = function (name) {
    return require(Routes.dirpath + '/' + name);
  }

  global.AppModules = context.AppModules = AppModules = {};
  AppModules.dirpath = __dirname + '/../../app_modules';
  AppModules.require = function (name) {
    return require(AppModules.dirpath + '/' + name);
  }

  // Now that have bootstrapped, we possibly load up an "extended" env
  dotenv = AppModules.require('dotenv')();
  context.env = process.env;

  // Load configuration
  context.configuration = configuration = AppModules.require('configuration')(process.env.NODE_ENV || "local");

  // Turn coverage on or off from the command line
  // usage: node app.js --coverage
  context.codeCoverageEnabled = codeCoverageEnabled = false;
  if (argv.coverage) {
    codeCoverageEnabled = true;
  }

  if (codeCoverageEnabled) {
    var im = require('istanbul-middleware');
    console.log('Istanbul hookLoader running...');
    im.hookLoader(__dirname);
  }

  return context;
}

console.log('base context initialized...');

module.exports = ContextExtension;
