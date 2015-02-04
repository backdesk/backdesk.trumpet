var Marionette = require('backbone.marionette'),
    WorkEmptyView  = require('./work.empty.view'),
    WorkChildView  = require('./work.child.view');

var WorkCollectionView = Marionette.CollectionView.extend({
    childView : WorkChildView,

    emptyView : WorkEmptyView
});

module.exports = WorkCollectionView;