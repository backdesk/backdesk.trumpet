var mongoose = require('mongoose'),
    winston = require('winston'),
    config = require('config');

mongoose.connect(config.get('mongo.uri'), function (err) {
  if (err) {
    winston.error('MongoDB', err);
  }
});

mongoose.set('debug', function (collectionName, method, query, doc, options) {
  winston.info('mongo collection: "%s" method: "%s"', collectionName, method);
});