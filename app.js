var express = require('express'),
    jwt = require("jsonwebtoken"),
    expressJwt = require('express-jwt');

var app = express();

app.use(expressJwt({
    secret : 'test'
}).unless({ path : '/test'}));

app.get('/test', function (req, res) {
    req.user = {
        token: jwt.sign({ _id : 0 }, 'test', {
            expiresInMinutes: 10080
        })
    };

    res.end(req.user.token);
});

app.get('/data', function (req, res) {
    res.end('test');
});

var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || 9999;

app.listen(port, host);