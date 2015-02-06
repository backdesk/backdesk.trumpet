var WorkModel = Backbone.Model.extend({
  url : '/resume/work',

  defaults : {
    endData : null
  }
});

module.exports = new WorkModel();