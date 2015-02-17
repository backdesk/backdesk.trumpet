var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  message : { type: String, required: true },
  subject : { type: String, required: true },
  owner : { type: Schema.ObjectId, required: true },
  read : { type: Boolean, default: false },
  sender : { type: String, default: 'user' },
  createdAt : { type: Date, default: Date.now }
});

module.exports = mongoose.model('message', MessageSchema);