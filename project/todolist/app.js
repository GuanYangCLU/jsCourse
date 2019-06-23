const express = require('express');
const mongoose = require('mongoose');
const mytodolist = require('./routes/mytodolist');

const app = express();
// const db = ;

// mongoose.connect(db).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// app.get('/', (req, res) => {
//   res.send('hello');
// });
app.use('/mylist', mytodolist);

const server = app.listen(5000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server runs on host ${host}, port ${port}`);
});
