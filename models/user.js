var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email : String,
  token : String
});

module.exports = mongoose.model('user', UserSchema);