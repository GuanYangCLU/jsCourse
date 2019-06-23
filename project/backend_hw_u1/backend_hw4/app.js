const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.get('*', (req,res) => {
//     res.end('404 not found');
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('*', (req, res) => {
  res.end(JSON.stringify(req.body).toUpperCase());
});

const port = '5002';
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
