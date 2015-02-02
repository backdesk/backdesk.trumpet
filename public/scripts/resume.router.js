var Marionette = require('backbone.marionette'),
    Controller = require('./resume.controller');

var Router = Backbone.Marionette.AppRouter.extend({
  controller: new Controller(),

  appRoutes: {
    '' : 'main',
    'auth' : 'auth'
  },

  initialize : function () {
    console.log('starting...');
  },

  gotoAuth : function () {
    this.navigate('auth');
    this.controller.auth();
  },

  gotoMain : function () {
    this.navigate('/');
    this.controller.main();
  }
});

module.exports = new Router();