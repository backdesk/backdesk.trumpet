var Marionette = require('backbone.marionette'),
    WorkCollectionView = require('./work.collection.view'),
    template = require('../templates/resume.html');

var ResumeView = Backbone.Marionette.LayoutView.extend({
  template : template,

  el : 'main',

  regions: {
    work: '#work'
  }
});

module.exports = ResumeView;