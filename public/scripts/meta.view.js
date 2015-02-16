var Marionette = require('backbone.marionette'),
    template = require('../templates/meta.html');

var MetaView = Marionette.ItemView.extend({
  tagName : 'header',
  
  template : template
});

module.exports = MetaView;