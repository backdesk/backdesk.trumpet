var Marionette = require('backbone.marionette'),
    moment = require('moment'),
    template = require('../templates/availability.html');

var AvailabilityView = Marionette.ItemView.extend({
  template : template,

  className : 'side-block',

  templateHelpers: {
    getAvailability : function() {
      var availableFrom = moment(this.availableFrom);

      if(moment().isAfter(availableFrom)) {
        return 'Available to start immediately.';
      } else {
        return 'Available from ' + availableFrom.format('Do MMMM YYYY');
      }
    }
  }
});

module.exports = AvailabilityView;