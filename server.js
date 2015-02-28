var express = require('express'),
    winston = require('winston'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('./mongoose'),
    resumeRoutes = require('./routes/resume'),
    messageRoutes = require('./routes/message'),
    userRoutes = require('./routes/user'),
    expressJwt = require('express-jwt');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(expressJwt({
  secret : 'mv2qtuWbU9N7dLZB5bnt'
}).unless({ path : ['/user/auth']}));

app.use('/user', userRoutes);
app.use('/api', messageRoutes);
app.use('/api', resumeRoutes);
app.use('/admin', resumeRoutes);

var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || 9999;

var http = app.listen(port, host, function () {
  winston.info('App', 'Starting on ' + host + ':' + port);
});