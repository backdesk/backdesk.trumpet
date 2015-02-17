var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    events = require('../events'),
    userModel = require('../user/models/user.model'),
    resumeModel = require('./models/resume.model'),
    ResumeLayout = require('./views/resume.layout'),
    AuthView = require('../user/views/auth.view');

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
    var user = events.reqres.request('user');

    if(user && user.get('token')) {
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
    events.command.execute('user:auth');
  },

  _onResumeDone : function () {
    this.region.show(new ResumeLayout({
      model : this.resume
    }));

    events.commands.execute('menu:load');
  },

  _onResumeFail : function () {
    events.command.execute('user:auth');
  }
});

module.exports = ResumeController;