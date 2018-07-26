var dotenv = require('../dotenv');

var context = require( "../" + (process.env.CONTEXT_INIT   || "context/contextInit"));

console.log('context setup complete...');

module.exports = context;
