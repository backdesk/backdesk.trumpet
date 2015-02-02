var Marionette = require('backbone.marionette');

var WorkCollection = Backbone.Collection.extend({
    url : '/api/resume'
});

module.exports = WorkCollection;