var Marionette = require('backbone.marionette'),
    Controller = require('./scripts/resume.controller');

var resume = new Marionette.Application({
    controller : new Controller()
});

resume.addInitializer(function(options){
  resume.controller.main();
});

resume.start();