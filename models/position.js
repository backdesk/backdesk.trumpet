var mongoose = require('mongoose');

var PositionSchema = new mongoose.Schema({
  company : String,
  position : String,
  summary : String,
  startDate : Date
});

module.exports = mongoose.model('position', PositionSchema);