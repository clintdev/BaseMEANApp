var dotenv = AppModules.require('dotenv/dotenvInit');

function DotenvInit () {
  // Fire off base dotenv init...
  dotenv();

  // Now load our custom vars
  dotenv.loadEnvironment('.sampleapp.env');
}

console.log('sampleApp dotenv initialized...');

module.exports = DotenvInit;
