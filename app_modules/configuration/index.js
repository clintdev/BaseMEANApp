var configuration = AppModules.require(process.env.CONFIGURATION_INIT || "configuration/configurationInit");

console.log('configuration setup complete...');

module.exports = configuration;


