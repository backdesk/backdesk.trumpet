var Marionette = require('backbone.marionette'),
    AvailabilityView = require('./availability.view'),
    AvailabilityModel = require('./availability.model'),
    template = require('../templates/side.html');

var SideLayout = Marionette.LayoutView.extend({
  id : 'side-menu',

  template : template,

  regions : {
    availability : '#availability'
  },

  _showAvailability : function () {
    this.availability.show(new AvailabilityView({
      model : new AvailabilityModel(this.model.get('availability'))
    }));
  },

  onRender : function () {
    this._showAvailability();
  }
});

module.exports = SideLayout;