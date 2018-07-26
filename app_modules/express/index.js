var express = AppModules.require(process.env.EXPRESS_INIT || "./expressInit");

console.log('express setup complete...');

module.exports = express;
