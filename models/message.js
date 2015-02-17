var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  message : { type: String, required: true},
  subject : { type: String, required: true},
  owner : { type: Schema.ObjectId, required: true},
  createdAt : Date
});

module.exports = mongoose.model('message', MessageSchema);