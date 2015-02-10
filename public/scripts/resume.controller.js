var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    userModel = require('./user.model'),
    resumeModel = require('./resume.model'),
    ResumeLayout = require('./resume.layout'),
    AuthView = require('./auth.view');

var ResumeController = Marionette.Object.extend({
  initialize : function (options) {
    _.bindAll(this, 'show', '_onResumeDone', '_onResumeFail');

    _.extend(this, _.pick(options, 'layout', 'region'));

    if(!this.layout) {
      throw new Error('Please provide a layout');
    }

    this.resume = resumeModel;

    this.listenTo(this.layout, 'render', function(){
      this.show(this.options.region)
    });
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
    this._getRegion().show(new AuthView({
      onAuthSuccess : this.show
    }));
  },

  _getRegion : function () {
    if(!this.layout) {
      throw 'No layout provided';
    }

    return this.layout.getRegion(this.region);
  },

  _onResumeDone : function () {
    this._getRegion().show(new ResumeLayout({
      model : this.resume
    }));
  },

  _onResumeFail : function () {
    this.auth();
  }
});

module.exports = ResumeController;