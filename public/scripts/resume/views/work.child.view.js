var Marionette = require('backbone.marionette'),
    marked = require('marked'),
    template = require('./templates/work.child.html');

var WorkItemView = Marionette.ItemView.extend({
  template : template,

  tagName : 'article',

  className : 'work-item',

  events : {
    'click .toggle' : 'onWorkToggled'
  },

  templateHelpers : function () {
    var view = this;

    return {
      getSummary : function() {
        return marked(this.summary);
      },

      getIcon : function () {
        if (view.$el.attr('data-old')) {
          return 'fa fa-plus-square-o'
        }

        return 'fa fa-minus-square-o'
      }
    }
  },

  onWorkToggled : function (e) {
    if(this.$el.attr('data-minified')) {
      this.$el.removeAttr('data-minified');
    } else {
      this.$el.attr('data-minified', true);
    }

    return false;
  }
});

module.exports = WorkItemView;