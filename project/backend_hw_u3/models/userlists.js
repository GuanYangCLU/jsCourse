const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User_Schema = new Schema({
  id: Number,
  name: {
    type: String,
    required: true
  },
  age: Number,
  sex: String,
  title: String,
  startdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Userlists = mongoose.model('userlists', User_Schema);
