var Marionette = require('backbone.marionette'),
    AvailabilityView = require('./availability.view'),
    template = require('../templates/side.html');

var SideView = Marionette.ItemView.extend({
  template : template,

  tagName : 'aside'
});

module.exports = SideView;