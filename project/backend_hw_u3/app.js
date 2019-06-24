const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users'); // routes
const bodyParser = require('body-parser');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mongoose
  .connect('mongodb://localhost:27017/db1', { useNewUrlParser: true })
  .then(console.log('MongoDB Connected'))
  .catch(err => console.log('Connect Error ' + err));
// db.connection.on('error', err => {
// });
// db.connection.on('open', () => {
//   ;
// });

app.use('/app/users', users);

const port = '5000';
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
