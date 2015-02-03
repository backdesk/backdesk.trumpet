var express = require('express'),
    jwt = require('jsonwebtoken'),
    router  = express.Router();

var User = require('../models/user');

router.get('/auth', function (req, res) {
  User.findOne({ email: req.query.email, token : req.query.token }, function(error, user) {
    if(error) {
      console.log(error);
    }

    if(user) {
      res.json({
        token : jwt.sign(user, 'mv2qtuWbU9N7dLZB5bnt', {
          expiresInMinutes: 60 * 5
        })
      });
    } else {
      res.sendStatus(404);
    }
  });
});

module.exports = router;