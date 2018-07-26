var mongoose = AppModules.require(process.env.MONGO_INIT || "./mongooseInit");

console.log('mongoose setup complete...');

module.exports = mongoose;
