var Marionette = require('backbone.marionette'),
    Controller = require('./resume.controller');

var Router = Backbone.Marionette.AppRouter.extend({
  controller: new Controller(),

  appRoutes: {
    '' : 'main'
  }
});

module.exports = Router;