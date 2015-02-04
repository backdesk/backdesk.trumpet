var Marionette = require('backbone.marionette'),
    WorkCollection = require('./work.collection'),
    WorkCollectionView = require('./work.collection.view'),
    template = require('../templates/resume.html');

var ResumeView = Backbone.Marionette.LayoutView.extend({
  template : template,

  el : 'main',

  regions: {
    work: '#work'
  },

  onRender : function () {
    this.work.show(new WorkCollectionView({
      collection : new WorkCollection(this.model.get('work'))
    }));
  }
});

module.exports = ResumeView;