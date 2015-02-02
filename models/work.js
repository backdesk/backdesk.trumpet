var mongoose = require('mongoose');

var WorkSchema = new mongoose.Schema({
  company : String,
  position : String,
  summary : String,
  startDate : Date
}, { collection : 'work' });

module.exports = mongoose.model('work', WorkSchema);