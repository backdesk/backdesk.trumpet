var Marionette = require('backbone.marionette'),
    ResumeController = require('./resume/resume.controller'),
    MenuController = require('./menu/menu.controller'),
    UserController = require('./user/user.controller'),
    MessageController = require('./messages/message.controller');

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