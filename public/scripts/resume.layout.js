var Marionette = require('backbone.marionette'),
    MetaView = require('./meta.view'),
    MetaModel = require('./meta.model'),
    WorkCollection = require('./work.collection'),
    WorkCollectionView = require('./work.collection.view'),
    template = require('../templates/resume.html');

var ResumeView = Marionette.LayoutView.extend({
  template : template,

  el : 'main',

  regions: {
    work : '#work',
    meta : '#meta'
  },

  onRender : function () {
    this.meta.show(new MetaView({
      model : new MetaModel(this.model.get('basics'))
    }));

    this.work.show(new WorkCollectionView({
      collection : new WorkCollection(this.model.get('work'))
    }));
  }
});

module.exports = ResumeView;