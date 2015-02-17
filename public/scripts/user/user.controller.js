var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    userModel = require('./models/user.model'),
    events = require('../events');

var UserController = Marionette.Object.extend({
  initialize : function (options) {
    _.bindAll(this, 'show');

    _.extend(this, _.pick(options, 'region'));

    if(!this.region) {
      throw Error('No region provided');
    }

    events.reqres.setHandler('user:token', function(){
      return userModel.get('token');
    });
  },

  show : function () {
  
  }
});

module.exports = UserController;