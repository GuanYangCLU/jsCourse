// JavaScript Homework #4 - Functions

// These are related to JavaScript functions:

// Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
// myAns:
// return Math.floor(x) === x
// try {console.log(arr[x])} catch (e) { console.log(e)}
// if ('.' in [...x.toString()]) { return true }
// typeof x === Number?

// Write a sum function which will work properly when invoked using either syntax below.
console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5
// myAns1:
// const sum = (a, b) => a + b;
// myAns2:
// const sum = x => {
//   return y => {
//     return x + y;
//   };
// };
const sum = (x, y) => {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(z) {
      x + z;
    };
  }
};

// const sum = x => (x>2?5:sum); ???

// What will the following code output to the console:

console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
);

// Explain your answer.
// myAns: 10!(3628800)
// trAns: SAME
// explain: recursive execution

// Consider the code snippet below. What will the console output be and why?

(function(x) {
  return (function(y) {
    console.log(x);
  })(2);
})(1);
// myAns: 1, undefined
// trAns: SAME
// explain: no return value
