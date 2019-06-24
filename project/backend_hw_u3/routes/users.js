const express = require('express');
const mongoose = require('mongoose');
const Userlists = require('../models/userlists'); // models schema
const router = express.Router(); // router

router.post('/insertone', (req, res) => {
  //   const { id, name, age, sex, title, startdate } = req.body;
  Userlists.findOne({ id: req.body.id }).then(user => {
    if (user) {
      let err = 'User already exists';
      return res.status(400).json(err);
    } else {
      const newUser = new Userlists({
        id: req.body.id,
        name: req.body.name,
        title: req.body.title
      });
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => res.json(err));
    }
  });
});

router.get('/getall', (req, res) => {
  Userlists.find()
    .sort({ id: 1 })
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: 'No users Found' }));
});

router.get('/getone/:id', (req, res) => {
  //   Userlists.findOne({ id: req.body.id })
  //     .then(user => res.json(user))
  //     .catch(err => res.status(404).json({ nousersfound: 'No users Found' }));

  Userlists.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ nouserfound: 'No user found by this id' })
    );
});

router.delete('/deleteone/:id', (req, res) => {
  Userlists.findOneAndDelete({ _id: req.params.id })
    // mongoose deprecate use findOneAndRemove
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ nouserfound: 'No user found by this id' })
    );
});

// router.delete('/deleteone/:id', (req, res) => {
//   Userlists.find()
//     .then(users => {
//       //   console.log(users);
//       let usersArr = users.map(x => x._id.toString());
//       console.log(usersArr);
//       console.log(req.params.id, typeof req.params.id);
//       if (usersArr.includes(req.params.id)) {
//         let deleteIndex = usersArr.indexOf(req.params.id);
//         users.splice(deleteIndex, 1);
//         console.log(users);
//         // dont forget to save
//         users.save().then(users => res.json(users));
//         //   .catch(err => console.log(err));
//       } else {
//         return res
//           .status(404)
//           .json({ nouserfound: 'No user found by this id' });
//       }
//     })
//     .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
// });

module.exports = router;
