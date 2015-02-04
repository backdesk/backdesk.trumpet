var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    restRoutes = require('./routes/resume'),
    userRoutes = require('./routes/user'),
    expressJwt = require('express-jwt');

// TODO: Use winston for logging and move to module.
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/resume');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(expressJwt({
    secret : 'mv2qtuWbU9N7dLZB5bnt'
}).unless({ path : '/user/auth'}));

app.use('/user', userRoutes);
app.use('/api',  restRoutes);

var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || 9999;

app.listen(port, host);