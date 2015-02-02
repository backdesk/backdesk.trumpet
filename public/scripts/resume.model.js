var Marionette = require('backbone.marionette');

var ResumeModel = Backbone.Model.extend({
    url : '/api/resume'
})

module.exports = ResumeModel;