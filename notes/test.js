// function a() {
//   console.log('A!');
//   var a = function() {
//     console.log('B!');
//   };
// }

// a();
// a();

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = random();
    if (rand % 2 === 0) {
      resolve('success', rand);
    } else {
      reject('err!', rand, new Date());
    }
  }, 2000); // success, fail use reject
});

p.then((str, rand) => {
  console.log(str, rand); // resolve call then 里的func, reject call catch里的func
}).catch((str, rand, date) => {
  console.log(str, rand);
});
