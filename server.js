var express = require('express'),
    jwt = require('jsonwebtoken'),
    path = require('path'),
    routes = require('./routes/resume'),
    expressJwt = require('express-jwt');

// TODO: Use winston for logging and move to module.
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/resume');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

/*
app.use(expressJwt({
    secret : 'test'
}).unless({ path : '/test'}));
*/

app.use('/api', routes);


var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || 9999;

app.listen(port, host);