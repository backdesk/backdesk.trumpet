var Marionette = require('backbone.marionette'),
    router = require('./scripts/resume.router');

var resume = new Marionette.Application();

resume.addInitializer(function () {
  $(document).ajaxError(function (e, xhr, options) {
    router.gotoAuth();
  });
});

resume.addInitializer(function(options){
  Backbone.history.start();
});

resume.start();