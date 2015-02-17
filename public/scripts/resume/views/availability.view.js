var Marionette = require('backbone.marionette'),
    moment = require('moment'),
    template = require('./templates/availability.html');

var AvailabilityView = Marionette.ItemView.extend({
  template : template,

  className : 'side-block',

  templateHelpers: {
    getAvailability : function() {
      var from = moment(this.from);

      if(moment().isAfter(from)) {
        return 'Available to start immediately.';
      } else {
        return 'Available from ' + from.format('Do MMMM YYYY');
      }
    }
  }
});

module.exports = AvailabilityView;