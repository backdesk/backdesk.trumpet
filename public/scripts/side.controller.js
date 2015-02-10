var Marionette = require('backbone.marionette'),
    SideLayout = require('./side.layout'),
    _ = require('underscore'),
    resumeModel = require('./resume.model');

var SideController = Marionette.Object.extend({
  initialize : function (options) {
    _.extend(this, _.pick(options, 'layout', 'region'));

    this.resume = resumeModel;

    this.listenTo(this.layout, 'render', function(){
      this.show(this.options.region)
    });
  },

  show : function () {
    this._getRegion().show(new SideLayout({
      model : resumeModel
    }));
  },

  _getRegion : function () {
    if(!this.layout) {
      throw 'No layout provided';
    }

    return this.layout.getRegion(this.region);
  }
});

module.exports = SideController;