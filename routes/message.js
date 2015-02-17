var express = require('express'),
    winston = require('winston'),
    mongoose = require('mongoose'),
    router  = express.Router();

var Message = require('../models/message');

router.get('/messages', function (req, res) {
  var query = {
    owner : req.user._id
  };

  Message.find(query, function (err, messages) {
    if(err) {
      res.status(500).send(err);
    }

    res.json(messages);
  });
});

router.get('/messages/:id', function (req, res) {
  Message.findById(req.params.id, function(err, message) {
    if(err) {
      if(err.name === 'CastError') {
        res.sendStatus(400);
      } else {
        res.status(500).send(err);
      }
    }

    if(!message || message && (message.owner.toString() !== req.user._id)) {
      res.sendStatus(404);
    } else {
      if(message) {
        res.json(message);
      }
    }
  });
});

router.put('/messages', function (req, res) {

});

router.post('/messages', function (req, res) {
  var message = new Message({
    message : req.body.message,
    subject : req.body.subject,
    owner : req.user._id,
    createdAt : new Date()
  });

  message.save(function (err) {
    if (err) {
      if(err.name === 'ValidationError') {
        res.status(400).send(err);
      } else {
        res.sendStatus(500);
      }
    } else {
      res.status(201).send(message);
    }
  });
});


module.exports = router;