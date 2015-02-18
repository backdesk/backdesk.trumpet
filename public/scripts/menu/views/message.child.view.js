var Marionette = require('backbone.marionette'),
    template = require('./templates/message.child.html');

var MessageChildView = Marionette.ItemView.extend({
  template : template,

  tagName : 'li',

  className : 'message-item'
});

module.exports = MessageChildView;