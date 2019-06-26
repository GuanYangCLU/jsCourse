const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String },
  location: { type: String },
  bio: { type: String }
});

module.exports = User = mongoose.model('users', UserSchema);
// 'users' is Mongo collection's name
