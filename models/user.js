var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var UserSchema = new Schema({
  email : String,
  token : String,
  resume : Schema.ObjectId,
});

module.exports = mongoose.model('user', UserSchema);