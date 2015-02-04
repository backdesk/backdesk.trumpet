var UserModel = Backbone.Model.extend({
  url : '/user/auth',

  defaults : {
    token : null
  },

  initialize : function () {
    this.store = window.sessionStorage;

    if(this.store && this.store.getItem('token')) {
      this.set('token', this.store.getItem('token'));
    }
  },

  set : function (attributes, options) {
    if(this.store && attributes.token) {
      this.store.setItem('token', attributes.token);
    }

    return Backbone.Model.prototype.set.call(this, attributes, options);
  }
});

module.exports = new UserModel();