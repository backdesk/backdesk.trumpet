var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    template = require('./templates/message.menu.html');

var MessageMenuView = Marionette.ItemView.extend({
  template : template,

  className : 'nav-block'
});

module.exports = MessageMenuView;