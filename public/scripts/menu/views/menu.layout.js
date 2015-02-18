var Marionette = require('backbone.marionette'),
    MessageMenuView = require('./message.menu.view'),
    MessageCollection = require('../collections/message.collection'),
    events = require('../../events'),
    template = require('./templates/menu.html');

var ResumeView = Marionette.LayoutView.extend({
  template : template,

  className : 'nav-inner',

  regions: {
   'messages' : '#messages',
   'settings' : '#settings'
  },

  onRender : function () {
    this.messages.show(new MessageMenuView({
      collection :  new MessageCollection()
    }));
  }
});

module.exports = ResumeView;