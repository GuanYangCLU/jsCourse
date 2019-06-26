const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Like = require('../models/like');

router.get('/', (req, res) => {
  Like.find()
    .then(likes => res.status(200).json(likes))
    .catch(err => res.status(404).json({ nolikefound: 'No like found' }));
});

router.get('/:userId', (req, res) => {
  Like.findOne({ userId: req.params.userId })
    .then(like => res.status(200).json(like))
    .catch(err =>
      res.status(404).json({ nolikefoundbyid: 'No like found by this id' })
    );
});

router.post('/', (req, res) => {
  const newLike = new Like({
    userId: req.body.userId, // currently dont have login, just tmp store
    postId: req.body.postId
  });
  newLike
    .save()
    .then(like => res.status(200).json(like))
    .catch(err =>
      res.status(500).json({ failedtocreate: 'Failed to Create: ' + err })
    );
});

router.put('/:likeId', (req, res) => {
  Like.findByIdAndUpdate(req.params.likeId, {
    $set: {
      userId: req.body.userId,
      postId: req.body.postId
    }
  })
    .then(like => res.status(200).json(like))
    .catch(err =>
      res.status(404).json({
        nolikefoundorfailedtoupdate: 'No like found or failed to update: ' + err
      })
    );
});

router.delete('/:likeId', (req, res) => {
  Like.findByIdAndDelete({ _id: req.params.likeId })
    .then(like => res.status(200).json(like))
    .catch(err =>
      res.status(404).json({
        nolikefoundorfailedtodelete: 'No like found or failed to delete: ' + err
      })
    );
});

module.exports = router;
