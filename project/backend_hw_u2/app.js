const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  if (JSON.stringify(req.body) === '{}') {
    // Object.keys(object).length === 0
    res.send('<h1>Please input youtube.json</h1>');
  } else {
    // console.log(req.body);
    const title = req.body.data.items[0].title;
    const thumbnailUrl = req.body.data.items[0].thumbnail.hqDefault;
    const linkUrl =
      'https://www.youtube.com/watch?v=' + req.body.data.items[0].id;
    const output = JSON.stringify({
      title: title,
      link: linkUrl,
      thumbnail: thumbnailUrl
    });
    fs.writeFile(__dirname + '/materials/youtube.json', output, err => {
      if (err) console.log(err);
      else console.log('Success write json!');
    });
    fs.writeFile(
      __dirname + '/materials/youtube.html',
      `title: ${title} <br> <a href='${linkUrl}'><img src='${thumbnailUrl}' /></a>`,
      err => {
        if (err) console.log(err);
        else console.log('Success write html!');
      }
    );
    res.send(
      `title: ${title} <br> <a href='${linkUrl}'><img src='${thumbnailUrl}' /></a>`
    );
  }
});

const port = '5001';
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
