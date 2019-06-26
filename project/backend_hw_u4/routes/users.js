const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(404).json({ nouserfound: 'No user found' }));
});

router.get('/:userId', (req, res) => {
  User.findById({ _id: req.params.userId })
    .then(user => res.status(200).json(user))
    .catch(err =>
      res.status(404).json({ nouserfoundbyid: 'No user found by this id' })
    );
});

router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    gender: req.body.gender,
    location: req.body.location,
    bio: req.body.bio
  });
  newUser
    .save()
    .then(user => res.status(200).json(user))
    .catch(err =>
      res.status(500).json({ failedtocreate: 'Failed to Create: ' + err })
    );
});

// in PUT you must preset which part you need update? why not patch?
// if I did not set gender, it will become null
router.put('/:userId', (req, res) => {
  User.findByIdAndUpdate(req.params.userId, {
    $set: {
      // _id: req.params.userId,
      name: req.body.name,
      gender: req.body.gender,
      location: req.body.location,
      bio: req.body.bio
    }
  })
    // .then(user => user.save())
    .then(user => res.status(200).json(user)) // old user
    .catch(err =>
      res.status(404).json({
        nouserfoundorfailedtoupdate: 'No user found or failed to update: ' + err
      })
    );
});

router.delete('/:userId', (req, res) => {
  User.findByIdAndDelete({ _id: req.params.userId })
    .then(user => res.status(200).json(user))
    .catch(err =>
      res.status(404).json({
        nouserfoundorfailedtodelete: 'No user found or failed to delete: ' + err
      })
    );
});

module.exports = router;
