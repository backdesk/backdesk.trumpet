var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    userModel = require('./user.model'),
    ResumeModel = require('./resume.model'),
    ResumeLayout = require('./resume.layout'),
    AuthView = require('./auth.view'),
    WorkCollection = require('./work.collection'),
    WorkCollectionView = require('./work.collection.view');

var ResumeController = Marionette.Controller.extend({
  initialize : function () {
    _.bindAll(this, 'main', '_onResumeDone', '_onResumeFail');

    this.layout = new ResumeLayout();
    this.resume = new ResumeModel();
  },

  main : function () {
    if(userModel.get('token')) {
      this.resume.fetch({
        headers : {
          'Authorization' : 'Bearer ' + userModel.get('token')
        }
      }).then(this._onResumeDone, this._onResumeFail);
    } else {
      this.auth();
    }
  },

  auth : function () {
    $('main').html(new AuthView({
      onAuthSuccess : this.main
    }).render().el);
  },

  _onResumeDone : function () {
    this.layout.render();

    this.layout.getRegion('work').show(new WorkCollectionView({
      collection : new WorkCollection(this.resume.get('work'))
    }));
  },

  _onResumeFail : function () {
    this.auth();
  }
});

module.exports = ResumeController;