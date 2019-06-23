const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const MyList = require('../models/Mylist');

router.get('/', (req, res) => {
  Mylist.findMany().then(rs => );
});

module.exports = router;
