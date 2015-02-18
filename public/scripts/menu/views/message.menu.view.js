var Marionette = require('backbone.marionette'),
    _ = require('underscore'),
    events = require('../../events'),
    MessageChildView = require('./message.child.view'),
    template = require('./templates/message.menu.html');

var MessageMenuView = Marionette.CompositeView.extend({
  template : template,

  className : 'nav-block',

  childView : MessageChildView,

  childViewContainer : '.message-list',

  collectionEvents : {
  	'sync' : 'setMessageCount' 
  },

  events : {
  	'click .message-btn' : 'onMessageButton'
  },

  initialize : function () {
  	var token = events.reqres.request('user:token');
    if(token) {
      this.collection.fetch({
        headers : {
          'Authorization' : 'Bearer ' + token
        }
      });
    }
  },

  setMessageCount : function () {
  	this.$('.count').text(this.collection.length)
  },

  onMessageButton : function () {
  	this.$('.message-list').toggle();
  	
  	return false;
  }
});

module.exports = MessageMenuView;