var express = require('express'),
    jwt = require('jsonwebtoken'),
    router  = express.Router();

var Resume = require('../models/resume');

router.get('/resume', function (req, res) {
    Resume
    .findOne()
    .populate('work')
    .exec(function (err, resume) {
        res.json(resume);
    });
});

router.get('/test', function (req, res) {
    req.user = {
        token: jwt.sign({
            _id : 0,
            scopes: []
        }, 'test', { expiresInMinutes: 10080 })
    };

    res.end(req.user.token);
});

module.exports = router;