var Marionette = require('backbone.marionette'),
    MenuLayout = require('./views/menu.layout'),
    events = require('../events'),
    _ = require('underscore');

var MenuController = Marionette.Object.extend({
  initialize : function (options) {
    _.bindAll(this, 'show');

    _.extend(this, _.pick(options, 'region'));

    events.commands.setHandler('menu:load', this.show);

    if(!this.region) {
      throw Error('No region provided');
    }
  },

  show : function () {
    this.region.show(new MenuLayout({
      model : this.resume
    }));
  }
});

module.exports = MenuController;