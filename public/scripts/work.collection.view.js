var Marionette = require('backbone.marionette'),
    WorkEmptyView  = require('./work.empty.view'),
    WorkChildView  = require('./work.child.view'),
    _ = require('underscore'),
    moment = require('moment');

var WorkCollectionView = Marionette.CollectionView.extend({
    childView : WorkChildView,

    emptyView : WorkEmptyView,

    buildChildView : function (child, ChildViewClass, childViewOptions) {
      var view, options, age, threshold = 5;

      options = _.extend({model: child}, childViewOptions);

      view = new ChildViewClass(options);

      if(child.get('endDate')) {
        age = moment().diff(moment(child.get('endDate')), 'years');
        if(age >= threshold) {
          view.$el.attr('data-minified', true);
        }
      }

      return view;
    }
});

module.exports = WorkCollectionView;