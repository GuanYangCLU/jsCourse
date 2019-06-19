// JavaScript Homework #1

// Enhance the callback version of http client (request) to make it promise-based, so it behaves like the
// promise version of http client (axios).
const axios = require('axios');

axios
  .get(req)
  .then(res => {
    console.log('Success! ' + res);
  })
  .catch(err => {
    console.log('Error! ' + err);
  })
  .finally(console.log('Complete!'));
