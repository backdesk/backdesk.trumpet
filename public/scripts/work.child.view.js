var Marionette = require('backbone.marionette'),
    marked = require('marked'),
    template = require('../templates/work.child.html');

var WorkItemView = Backbone.Marionette.ItemView.extend({
  template : template,

  templateHelpers: {
    getSummary : function() {
      return marked(this.summary);
    }
  }
});

module.exports = WorkItemView;