var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    commands = require('./commands'),
    userModel = require('./user.model'),
    resumeModel = require('./resume.model'),
    ResumeLayout = require('./resume.layout'),
    AuthView = require('./auth.view');

var ResumeController = Marionette.Object.extend({
  initialize : function (options) {
    _.bindAll(this, 'show', '_onResumeDone', '_onResumeFail');

    _.extend(this, _.pick(options, 'region'));

    if(!this.region) {
      throw Error('No region provided');
    }

    this.resume = resumeModel;
  },

  show : function () {
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
    this.region.show(new AuthView({
      onAuthSuccess : this.show
    }));
  },

  _onResumeDone : function () {
    this.region.show(new ResumeLayout({
      model : this.resume
    }));

    commands.execute('menu:show');
  },

  _onResumeFail : function () {
    this.auth();
  }
});

module.exports = ResumeController;