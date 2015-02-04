var express = require('express'),
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