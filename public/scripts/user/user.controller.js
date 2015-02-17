var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    AuthView = require('./views/auth.view'),
    userModel = require('./models/user.model'),
    events = require('../events');

var UserController = Marionette.Object.extend({
  initialize : function (options) {
    _.bindAll(this, 'show', '_onAuthSuccess', '_onAuthFailure');

    _.extend(this, _.pick(options, 'region'));

    if(!this.region) {
      throw Error('No region provided');
    }

    events.reqres.setHandler('user:token', function(){
      return userModel.get('token');
    });

    events.commands.setHandler('user:auth', this.show);
  },

  // TODO: Move submission handler to here.
  show : function () {
    var view = new AuthView({
      model : userModel
    });

    this.listenTo(view, 'form:submitted', this._authenticate);
    this.region.show(view);
  },

  _authenticate : function (email, token) {
    userModel.fetch({
      data : {
        email : email,
        token : token
      }
    }).then(this._onAuthSuccess, this._onAuthFailure);
  },

  _onAuthSuccess : function () {
    events.dispatcher.trigger('user:authenticated');
    this.region.empty();
  },

  _onAuthFailure : function () {
    console.log('auth failed');
  }
});

module.exports = UserController;