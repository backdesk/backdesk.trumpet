var MessageModel = require('../models/message.model');

var MessageCollection = Backbone.Collection.extend({
  url : '/api/messages',

  model : MessageModel
});

module.exports = MessageCollection;