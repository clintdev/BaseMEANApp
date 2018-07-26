var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() =>  console.log('MongoDB connection successful'))
  .catch((err) => console.error(err));

console.log('base mongoose extensions complete...');

module.exports = mongoose;
