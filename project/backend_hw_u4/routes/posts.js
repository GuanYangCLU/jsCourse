const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(404).json({ nopostfound: 'No post found' }));
});

// note: findById only find this Model's _id (in this case is postId)
router.get('/:userId', (req, res) => {
  Post.findOne({ userId: req.params.userId })
    .then(post => res.status(200).json(post))
    .catch(err =>
      res.status(404).json({ nopostfoundbyid: 'No post found by this id' })
    );
});

router.post('/', (req, res) => {
  const newPost = new Post({
    content: req.body.content,
    create_at: req.body.create_at,
    userId: req.body.userId // currently dont have login, just tmp store
  });
  newPost
    .save()
    .then(post => res.status(200).json(post))
    .catch(err =>
      res.status(500).json({ failedtocreate: 'Failed to Create: ' + err })
    );
});

router.put('/:postId', (req, res) => {
  Post.findByIdAndUpdate(req.params.postId, {
    $set: {
      content: req.body.content,
      create_at: req.body.create_at,
      userId: req.body.userId
    }
  })
    .then(post => res.status(200).json(post))
    .catch(err =>
      res.status(404).json({
        nopostfoundorfailedtoupdate: 'No post found or failed to update: ' + err
      })
    );
});

router.delete('/:postId', (req, res) => {
  Post.findByIdAndDelete({ _id: req.params.postId })
    .then(post => res.status(200).json(post))
    .catch(err =>
      res.status(404).json({
        nopostfoundorfailedtodelete: 'No post found or failed to delete: ' + err
      })
    );
});

module.exports = router;
