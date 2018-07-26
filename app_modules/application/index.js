var application = AppModules.require(process.env.APPLICATION_INIT || "application/applicationInit");

console.log('application setup complete...');

module.exports = application;
