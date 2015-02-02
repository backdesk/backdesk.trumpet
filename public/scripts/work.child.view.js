var Marionette = require('backbone.marionette'),
    marked = require('marked'),
    template = require('../templates/work.child.html');

var WorkItemView = Backbone.Marionette.ItemView.extend({
    template : template
});

module.exports = WorkItemView;