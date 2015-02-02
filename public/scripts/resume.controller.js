var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    ResumeModel = require('./resume.model'),
    ResumeLayout = require('./resume.layout'),
    WorkCollection = require('./work.collection'),
    WorkCollectionView = require('./work.collection.view');

var ResumeController = Marionette.Controller.extend({
  initialize : function () {
    _.bindAll(this, '_onResumeDone', '_onResumeFail');

    this.layout = new ResumeLayout();
    this.resume = new ResumeModel();
  },

  main : function () {
    this.layout.render();
    this.resume.fetch().then(this._onResumeDone, this._onResumeFail);
  },

  _onResumeDone : function () {
    this.layout.getRegion('work').show(new WorkCollectionView({
      collection : new WorkCollection(this.resume.get('work'))
    }));
  },

  _onResumeFail : function () {

  }
});

module.exports = ResumeController;