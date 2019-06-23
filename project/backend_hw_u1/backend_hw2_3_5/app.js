const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.end(
    '<h3>Welcome to my home work 2, 3, 5, use route /api/parsetime* and api/unixtime* to test HW3, one example: http://localhost:5001/api/unixtime?iso=2013-08-10T12:10:15.474Z</h3>'
  );
});

// 2
fs.readdir('filelist', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    let filteredFiles = files.filter(x => x.split('.')[1] === 'txt');
    for (let i = 0; i < filteredFiles.length; i++) {
      fs.readFile(
        path.join(__dirname, 'filelist', filteredFiles[i]),
        { encoding: 'utf8' },
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        }
      );
    }
  }
});

// 3
app.get('/api/parsetime*', (req, res) => {
  if (!/iso/.test(req.url)) throw new Error('Not an iso time');
  let arr = req.url.split(':');
  let jt = { hour: null, minute: null, second: null };
  jt['hour'] = arr[0].slice(-2);
  //   console.log(arr);
  //   console.log(arr[0].slice(-2));
  jt['minute'] = arr[1];
  jt['second'] = arr[2].slice(0, 2);
  console.log(jt);
  res.json(jt);
  // res.writeHead(200, { 'Content-Type': 'application/json' })
});
//   .catch(err => {
//     console.log(err);
//   });
app.get('/api/unixtime*', (req, res) => {
  if (!/iso/.test(req.url)) throw new Error('Not an iso time');
  let arrd = req.url.split('-'); // date
  let arrt = req.url.split(':'); // time
  let arrm = req.url.split('.'); // millsec
  let arrTs = [
    arrd[0].slice(-4),
    arrd[1],
    arrd[1].slice(0, 2),
    arrt[0].slice(-2),
    arrt[1],
    arrt[1].slice(0, 2),
    arrm[1].slice(0, 3)
  ];
  let ut = { unixtime: null };
  let stamp = new Date(...arrTs).getTime(); // timestamp
  ut['unixtime'] = stamp;
  console.log(arrTs);
  console.log(ut);
  res.json(ut);
});

// 5
const printReq = (url,
(err, urlx) => {
  if (err) {
    console.log(err);
  }
  return urlx;
});

app.get('/hw5', (req, res) => {
  printReq(req.url[0], (err, url1) => {
    printReq(req.url[1], (err, url2) => {
      printReq(req.url[2], (err, url3) => {
        if (err) {
          console.log(err);
        }
        res.json(url1 + url2 + url3);
      });
    });
  });
  //   printReq(req.url[0])
  //     .then(printReq(req.url[1]))
  //     .then(printReq(req.url[2]))
  //     .then(res.json(url1 + url2 + url3))
  //     .catch(err => console.log(err));
});

const port = '5001';
app.listen(port, () => {
  console.log(`server runnin on ${port}`);
});
