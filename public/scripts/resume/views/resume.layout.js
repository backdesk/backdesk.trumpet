var Marionette = require('backbone.marionette'),
    SideLayout = require('./side.layout'),
    MetaView = require('./meta.view'),
    MetaModel = require('../models/meta.model'),
    WorkCollection = require('../collections/work.collection'),
    WorkCollectionView = require('./work.collection.view'),
    template = require('./templates/resume.html');

var ResumeView = Marionette.LayoutView.extend({
  template : template,

  id : 'resume',

  regions: {
    side : '#side',
    work : '#work',
    meta : '#meta'
  },

  onRender : function () {
    var meta = new MetaModel(this.model.get('basics'));

    this.meta.show(new MetaView({
      model : meta
    }));

    this.side.show(new SideLayout({
      model : this.model
    }));

    this.work.show(new WorkCollectionView({
      collection : new WorkCollection(this.model.get('work'))
    }));
  }
});

module.exports = ResumeView;