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

module.exports = router;