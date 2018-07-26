var dotenv = require('dotenv');
var fs = require("fs");

/* Load env variables function */
dotenv.loadEnvironment = function(envFilename) {
  var variables = fs.readFileSync(envFilename, "utf8");

  var splitLines = variables.split('\n');
  for (i = 0; i < splitLines.length; ++i) {
    var line = splitLines[i].replace('\r', '');
    var splitLine = line.split('=');
    if ((splitLine[0].length > 0) && (splitLine[1].length > 0)) {
      process.env[splitLine[0]] = splitLine[1];
    }
  }
}

function DotenvInit() {
  // load base app variables, adding on to .env variables
  dotenv.loadEnvironment('.application.env');
}

console.log('base dotenv extensions complete...');

module.exports = DotenvInit;
