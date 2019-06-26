const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const users = require('./routes/users');
const posts = require('./routes/posts');
const likes = require('./routes/likes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/likes', likes);

mongoose
  .connect('mongodb://localhost:27017/wechat', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  }) // fix mongoose deprecation warnings
  // OR: mongoose.set('useNewUrlParser', true);
  .then(console.log('MongoDB connected!'))
  .catch(err => console.log('Connection Error: ' + err));

const port = '5000';
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
