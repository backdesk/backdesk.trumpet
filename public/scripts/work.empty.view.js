var Marionette = require('backbone.marionette'),
    template = require('../templates/work.empty.html');

var WorkEmptyView = Backbone.Marionette.ItemView.extend({
    template : template
});

module.exports = WorkEmptyView;