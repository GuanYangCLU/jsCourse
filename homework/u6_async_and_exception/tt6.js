// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(
//     (function(x) {
//       return () => {
//         console.log('Index: ' + x + ', element: ' + arr[x]);
//       };
//     })(i),
//     3000
//   );
// }

// function timer(t) {
//   const ref = setInterval(function() {
//     console.log(t--);
//     if (t === -1) {
//       clearInterval(ref);
//     }
//   }, 1000);
// }

// timer(2);

(function() {
  try {
    throw new Error();
  } catch (err) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
