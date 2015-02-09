var express = require('express'),
    winston = require('winston'),
    router  = express.Router();

var Resume = require('../models/resume');

router.get('/resume', function (req, res) {
  Resume.findById(req.user.resume)
  .populate('work')
  .exec(function (err, resume) {
    if(resume) {
      res.json(resume);
    } else {
      res.sendStatus(404);
    }
  });
});

module.exports = router;