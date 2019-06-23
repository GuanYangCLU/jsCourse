const m1 = require('./1-moduel.js');
const m2 = require('./2-module.js');

module.exports = {
  f1() {},
  f2() {}
};

exports.func1 = () => {
  console.log(' ');
};

// core modules - within node.js
// npm modules - from npmjs.org
// file / application modules - user developed

// fs.readFile()

//fs.createReadStream('favicon.ico')?
// fs.pipe(res)?

// res.end('hello');

// req.method - 'GET' ...
// req.url - /index.html ...
// dynamic server

// const http = require('http');
// const server = http.createServer(function(req,res){})

// switch (req.url) {
//   case '/':
//     res.end('hello');
//     break;
//   case '/home':
//     break;
//   default:
//     break;
// }

// static web server
// const connect = require('connect')
// const servestatic = require('serve-static');

// npm install
// -local -- only folder can use
// -global

// write fun code -> write test code -> run test
//                   test coverage, ..%rate

// react test: Enzyme  test Component

// Promise.resolve(x) 强制promise成功，输出x
// Promise.reject() 强制promise失败

// Promise.race() -- MDN

// Create promise
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = random();
//       if (rand % 2 === 0) {
//         resolve('success', rand);
//       } else {
//         reject('err!', rand, new Date());
//       }
//     }, 2000); // success, fail use reject
//   });

//   p.then((str, rand) => {
//     console.log(str, rand); // resolve call then 里的func, reject call catch里的func
//   }).catch((str, rand, date) => {
//     console.log(str, rand);
//   });

// JSON.parse(jsonString)
// JSON.stringify(obj)  // output jsonString, 用来比较两个content相同而地址不同的对象, string可比
//

export const name = 'hello';
export const func = () => {};

class Person {}

export default Person;

//----------
import { func, name } from '../xxx/yyy'; // 名字要match
import * as test from './sasas';
test();

import Person from './asaa'; // 从default中match  default只能有一个
import { resolve } from 'dns';

// old: node写法
const name = require('./asasaa');
module.exports = name;

const request = require('request');
request('www.google.com', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // do
  }
});

const myaxios = url => {
  return new Promise((resolve, reject) => {
    request('www.google.com', (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

myaxios('http://www.google.com')
  .then(res => {
    console.log(JSON.stringify(res, null, 2)); // 输出格式化，缩进2位 @@@@@
  })
  .catch(err => {
    console.log(err);
  });

// arr.slice(-1)
// https://regexr.com/
