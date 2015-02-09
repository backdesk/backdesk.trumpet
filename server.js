var express = require('express'),
    winston = require('winston'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path'),
    config = require('config'),
    restRoutes = require('./routes/resume'),
    userRoutes = require('./routes/user'),
    expressJwt = require('express-jwt');

mongoose.connect(config.get('mongo.uri'), function (err) {
  if (err) {
    winston.error('MongoDB', err);
  }
});

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(expressJwt({
    secret : 'mv2qtuWbU9N7dLZB5bnt'
}).unless({ path : ['/user/auth']}));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.sendStatus(401, 'invalid token...');
  }
});

app.use('/user', userRoutes);
app.use('/api',  restRoutes);

var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || 9999;

app.listen(port, host, function () {
  winston.info('App', 'Starting on ' + host + ':' + port);
});