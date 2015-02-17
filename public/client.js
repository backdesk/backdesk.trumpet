var Marionette = require('backbone.marionette'),
    ResumeController = require('./scripts/resume/resume.controller'),
    MenuController = require('./scripts/menu/menu.controller'),
    UserController = require('./scripts/user/user.controller');

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
  }),

  user : new UserController({
    region : new Marionette.Region({
      el: $('main')
    })
  })
});

app.addInitializer(function () {
	app.main.show();
});

app.start();