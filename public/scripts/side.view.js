var Marionette = require('backbone.marionette'),
    moment = require('moment'),
    template = require('../templates/side.html');

var SideView = Marionette.ItemView.extend({
  template : template,

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

module.exports = SideView;