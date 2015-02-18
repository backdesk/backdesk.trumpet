var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    MessageCollection = require('./collections/message.collection'),
    events = require('../events');

var MessageController = Marionette.Object.extend({
  initialize : function () {
    this.collection = new MessageCollection();
  }
});

module.exports = MessageController;