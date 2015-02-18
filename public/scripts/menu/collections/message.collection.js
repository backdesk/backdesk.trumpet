var MessageCollection = Backbone.Collection.extend({
  url : '/api/messages'
});

module.exports = MessageCollection;