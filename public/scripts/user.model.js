var Marionette = require('backbone.marionette');

var UserModel = Backbone.Model.extend({
    url : '/user/auth',

    defaults : {
        token : null
    }
});

module.exports = new UserModel();