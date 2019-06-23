const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/www')));

// Basic Routing Rule:

// url == file? => if there is a file: return file
// if there is NOT a file: method = GET && URL = start.html? : send
// if NOT: method=GET && URL = upload.html? : send
// Get && Test
// return 404

app.get('/start.html', (req, res) => {
  res.send('this is start page');
  console.log('in start page');
});

app.get('/upload.html', (req, res) => {
  res.send('this is upload page');
  console.log('in upload page');
});

const testfunc = (req, res) => {
  res.send('this is test page');
  console.log('in test page');
};

app.get('/', testfunc);

// exports.start_server = start; // rename
app.listen(8888, () => console.log('running on 8888'));
