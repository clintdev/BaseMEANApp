var dotenv = require("../" + (process.env.DOTENV_INIT || "dotenv/dotenvInit"));

console.log('dotenv setup complete...');

module.exports = dotenv;
