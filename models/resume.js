var mongoose = require('mongoose'),
    position = require('./position'),
    Schema = mongoose.Schema;

var ResumeSchema = new Schema({
  name  : String,
  email : String,
  phone : String,
  positions : [{ type: Schema.Types.ObjectId, ref : 'position'}]
});

module.exports = mongoose.model('resume', ResumeSchema);
