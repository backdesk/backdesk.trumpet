var mongoose = require('mongoose'),
    position = require('./position'),
    Schema = mongoose.Schema;

var ResumeSchema = new Schema({
  name  : String,
  email : String,
  phone : String,
  positions : [
    { type: Schema.ObjectId, ref : 'position'}
  ]
}, { collection : 'meta' });

module.exports = mongoose.model('resume', ResumeSchema);