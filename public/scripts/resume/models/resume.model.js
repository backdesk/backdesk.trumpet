var MetaModel = require('./meta.model');

var ResumeModel = Backbone.Model.extend({
  url : '/api/resume'
});

module.exports = new ResumeModel();