var Marionette = require('backbone.marionette'),
    AvailabilityView = require('./availability.view'),
    template = require('../templates/side.html');

var SideLayout = Marionette.ItemView.extend({
  id : 'side-menu',

  template : template,

  onRender : function () {
    this.$el.append(new AvailabilityView({

    }).render().el);
  }
});

module.exports = SideLayout;