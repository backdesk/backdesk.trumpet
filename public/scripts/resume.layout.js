var Marionette = require('backbone.marionette'),
    SideView = require('./side.view'),
    MetaView = require('./meta.view'),
    MetaModel = require('./meta.model'),
    WorkCollection = require('./work.collection'),
    WorkCollectionView = require('./work.collection.view'),
    template = require('../templates/resume.html');

var ResumeView = Marionette.LayoutView.extend({
  template : template,

  el : '.container',

  regions: {
    work : '#work',
    meta : '#meta'
  },

  onRender : function () {
    var side, meta = new MetaModel(this.model.get('basics'));

    this.meta.show(new MetaView({
      model : meta
    }));

    this.work.show(new WorkCollectionView({
      collection : new WorkCollection(this.model.get('work'))
    }));
  }
});

module.exports = ResumeView;