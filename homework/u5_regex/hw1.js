// JavaScript Homework #1 - Array

// 1. Write a JavaScript function to get the sum of an array without using any loop statement.
var arr = [1, 2, 3, 5, 8, 9, 7];
const sum = arr.reduce((a, i) => (a += i), 0);
console.log(sum);
// function mode:
// function sum(arr) {
//   return arr.reduce(function(a, i) {
//     return (a += i);
//   }, 0);
// }
// console.log(sum(arr));

// 2. Write a JavaScript function to filter false, null, 0 and blank values from an array without using any loop statement.
var arr = [0, false, 1, true, null, 'null', ' ', '   ', ' a b '];
const inValidString = arr.filter(str => {
  return (
    str !== 0 && str !== false && str !== null && /\s\S+|S+\s|\S/.test(str)
  );
});
console.log(inValidString);
