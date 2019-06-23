const express = require('express');
const matrixspiral = require('./controllers/matrixspiral');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();
let y = 4;
app.get(`/${y}`, (req, res) => {
  console.log(req.body);

  res.send(`<h1>${matrixspiral.printMatrix(y)}</h1>`);
});

app.get('/', (req, res) => {
  //   console.log(req.body);
  //   res.send(req.data);
  res.render('index', { title: 'Express' });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  if (req) {
    console.log(req.body.v);
  }
  res.send(matrixspiral.printMatrix(req.body.v));
  // res.send(req.body);
  //   res.send(`<h1>${matrixspiral.printMatrix(req)}</h1>`);
  //   console.log(matrixspiral.printMatrix(y));
});

// app.use(express.static(path.join(__dirname, 'views')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = '5000';
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
