var Marionette = require('backbone.marionette'),
    ResumeController = require('./scripts/resume.controller');

var app = new Marionette.Application({
  main : new ResumeController({
  	region : new Marionette.Region({
      el: $('main')
    })
  })
});

app.addInitializer(function () {
	app.main.show();
});

app.start();