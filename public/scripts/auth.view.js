var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    validator = require('validator'),
    userModel = require('./user.model'),
    template = require('../templates/auth.html');

var AuthView = Backbone.Marionette.ItemView.extend({
  template : template,

  events : {
    'submit' : '_onSubmit'
  },

  model : userModel,

  initialize : function () {
    _.bindAll(this, '_onAuthSuccess', '_onAuthFailure');
  },

  _sanitizeCredential : function (credential) {
    credential = validator.trim(credential);
    credential = validator.escape(credential);

    return credential;
  },

  _onSubmit : function (e) {
    e.preventDefault();

    var errors = [], email = $('input[name=email]'), token = $('input[name=token]');

    email = this._sanitizeCredential(email.val());
    if(!validator.isEmail(email)) {
      errors.push('invalid email');
    }

    token = this._sanitizeCredential(token.val());
    if(!validator.isLength(token, 20)) {
      errors.push('invalid token');
    }

    if(errors.length === 0) {
      this.model.fetch({
        data : {
          email : email,
          token : token
        }
      }).then(this._onAuthSuccess, this._onAuthFailure);
    } else {
      console.log('bad input');
    }

    return false;
  },

  _onAuthSuccess : function () {
    this.options.onAuthSuccess();
  },

  _onAuthFailure : function () {
    console.log('auth failure');
  }
});

module.exports = AuthView;