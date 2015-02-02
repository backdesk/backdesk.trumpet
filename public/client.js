var Marionette = require('backbone.marionette'),
    Router = require('./scripts/resume.router');

var resume = new Marionette.Application();

resume.addInitializer(function(options){
  new Router();

  Backbone.history.start();
});

resume.start();