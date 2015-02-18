var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    validator = require('validator'),
    userModel = require('../models/user.model'),
    template = require('./templates/auth.html');

var AuthView = Marionette.ItemView.extend({
  template : template,

  events : {
    'submit' : '_onSubmit'
  }, 

  model : userModel,

  _sanitizeCredential : function (credential) {
    credential = validator.trim(credential);
    credential = validator.escape(credential);

    return credential;
  },

  _onSubmit : function () {
    var errors = [], email = $('input[name=email]'), token = $('input[name=token]');

    // TODO: Move to model validation.
    email = this._sanitizeCredential(email.val());
    if(!validator.isEmail(email)) {
      errors.push('invalid email');
    }

    token = this._sanitizeCredential(token.val());
    if(!validator.isLength(token, 20)) {
      errors.push('invalid token');
    }

    if(!errors.length === 0) {
      console.log('bad input');
    } else {
      this.trigger('form:submitted', email, token);
    }

    return false;
  }
});

module.exports = AuthView;