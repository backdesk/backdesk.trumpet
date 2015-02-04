var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    userModel = require('./user.model'),
    ResumeModel = require('./resume.model'),
    ResumeLayout = require('./resume.layout'),
    AuthView = require('./auth.view');

var ResumeController = Marionette.Controller.extend({
  initialize : function () {
    _.bindAll(this, 'main', '_onResumeDone', '_onResumeFail');

    this.resume = new ResumeModel();

    this.layout = new ResumeLayout({
      model : this.resume
    });
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
      onAuthSuccess : this.main // De-couple somehow.
    }).render().el);
  },

  _onResumeDone : function () {
    this.layout.render();
  },

  _onResumeFail : function () {
    this.auth();
  }
});

module.exports = ResumeController;