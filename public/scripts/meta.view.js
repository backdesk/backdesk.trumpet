var Marionette = require('backbone.marionette'),
    template = require('../templates/meta.html');

var MetaView = Marionette.ItemView.extend({
  template : template
});

module.exports = MetaView;