var Marionette = require('backbone.marionette'),
    ResumeController = require('./scripts/resume.controller'),
    MenuController = require('./scripts/menu/menu.controller');

var app = new Marionette.Application({
  main : new ResumeController({
  	region : new Marionette.Region({
      el: $('main')
    })
  }),

  menu : new MenuController({
  	region : new Marionette.Region({
      el: $('nav')
    })
  })
});

app.addInitializer(function () {
	app.main.show();
});

app.start();