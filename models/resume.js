var mongoose = require('mongoose'),
    work = require('./work'),
    Schema = mongoose.Schema;

var ResumeSchema = new Schema({
  name  : String,
  email : String,
  phone : String,
  work : [{ type: Schema.ObjectId, ref : 'work'}]
});

module.exports = mongoose.model('resume', ResumeSchema);
