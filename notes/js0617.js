// promise obj
// pending, initial state, not fulfilled or rejected
// fulfilled
// rejected
let p = http.get(URL);
get(URL, function(err, rs) {
  if (err) {
  }
  // do rs;
});

// promise: use & create
p = new Promise();
let p = async_function();
p.then(fs(rs));
p.catch(ff(err));

// axios

// promise chain
// catch any then level errors even .then.then.then.catch
// db.query(q1).then(r1 => db.query(q2)).then((r1,r2) => db.query(q3)).catch()

// Promise.all
// parallel async, like batch processing?
Promise.all([db.query(q1), db.query(q2), db.query(q3)])
  .then(r => {})
  .catch(e => {});



// create promise
let p = new Promise(function(f1,f2){ // (resolve, reject)
    perform async job;
    if success f1(); // resolve
    if failure f2(); // reject
})

 // resovle and reject 是否是promise自带？ 可否写复杂而不仅仅是return string? @@@@

 // exception handling *****

// catch/then at p's then, not directly in async function

// JSON

// let obj = JSON.parse(text);  // JSON string to JSON obj
// 
// let jsonText = JSON.stringify(obj);

// module export

// node.js: module.exports = class xxx{}


// setImmediate(0) VS setTimeOut(0)
// setImmediate 时间到后直接push到req queue到最前端，而setTimeOut放在req queue到最后端

// not all callback functions are async

// callback hell 非异步解决：从内向外定义 一层层套
// const C = {fs.write...}  const B = () => { fs.write...(c.txt, C)} const A = ...
