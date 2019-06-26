const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  content: { type: String },
  create_at: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'users' }
});

module.exports = Post = mongoose.model('posts', PostSchema);
