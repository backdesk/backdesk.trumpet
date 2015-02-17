var Marionette = require('backbone.marionette'),
    template = require('../../templates/menu.html');

var ResumeView = Marionette.LayoutView.extend({
  template : template,

  className : 'nav-inner',

  regions: {
   'messages' : '#messages',
   'settings' : '#settings'
  },

  onRender : function () {
   
  }
});

module.exports = ResumeView;