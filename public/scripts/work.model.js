var WorkModel = Backbone.Model.extend({
  url : '/resume/work',

  idAttribute : '_id',

  defaults : {
    endData : null
  }
});

module.exports = WorkModel;