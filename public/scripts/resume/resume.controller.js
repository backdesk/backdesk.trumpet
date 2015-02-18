var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    events = require('../events'),
    resumeModel = require('./models/resume.model'),
    ResumeLayout = require('./views/resume.layout');

var ResumeController = Marionette.Object.extend({
  initialize : function (options) {
    _.bindAll(this, 'show', '_onResumeDone', '_onResumeFail');

    _.extend(this, _.pick(options, 'region'));

    if(!this.region) {
      throw Error('No region provided');
    }

    this.listenTo(events.dispatcher, 'user:authenticated', this.show);

    this.resume = resumeModel;
  },

  show : function () {
    var token = events.reqres.request('user:token');

    if(token) {
      this.resume.fetch({
        headers : {
          'Authorization' : 'Bearer ' + token
        }
      }).then(this._onResumeDone, this._onResumeFail);
    } else {
      this.auth();
    }
  },

  auth : function () {
    events.commands.execute('user:auth');
  },

  _onResumeDone : function () {
    this.region.show(new ResumeLayout({
      model : this.resume
    }));

    events.commands.execute('menu:load');
  },

  _onResumeFail : function () {
    this.auth();
  }
});

module.exports = ResumeController;