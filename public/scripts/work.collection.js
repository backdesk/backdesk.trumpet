var WorkModel = require('./work.model');

var WorkCollection = Backbone.Collection.extend({
  url : '/api/resume',

  model : WorkModel
});

module.exports = WorkCollection;