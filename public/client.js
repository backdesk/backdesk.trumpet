var Marionette = require('backbone.marionette'),
    RootView = require('./scripts/root.view'),
    ResumeController = require('./scripts/resume.controller'),
    SideController = require('./scripts/side.controller');

var root = new RootView();

var app = new Marionette.Application({
  main : new ResumeController({
    layout : root,
    region : 'main'
  }),

  side : new SideController({
    layout : root,
    region : 'side'
  })
});

app.addInitializer(function () {
  root.render();
});

app.start();