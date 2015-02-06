var Marionette = require('backbone.marionette'),
    Controller = require('./resume.controller');

var ResumeRouter = new Marionette.AppRouter({
  controller: new Controller(),

  appRoutes: {
    '' : 'main'
  }
});

module.exports = ResumeRouter;