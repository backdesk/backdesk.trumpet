var Marionette = require('backbone.marionette'),
    template = require('../templates/root.html');

var RootView = Marionette.LayoutView.extend({
  el : '#app',

  template : template,

  regions : {
    'main' : 'main',
    'side' : 'aside'
  }
});

module.exports = RootView;