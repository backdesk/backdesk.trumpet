var Marionette = require('backbone.marionette'),
    marked = require('marked'),
    template = require('../templates/work.child.html');

var WorkItemView = Marionette.ItemView.extend({
  template : template,

  tagName : 'article',

  templateHelpers: {
    getSummary : function() {
      return marked(this.summary);
    }
  }
});

module.exports = WorkItemView;