// JavaScript Homework #3

// Reverse Integer
// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:
// Input: 123
// Output: 321
// Example 2:
// Input: -123
// Output: -321
// Example 3:
// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only hold integers within the 32-bit signed
// integer range. For the purpose of this problem, assume that your function returns 0 when the reversed
// integer overflows. Please use exception handling to deal with integer overflows.
function revInt(num) {
  const MAXINT = Math.pow(2, 31) - 1;
  let sig = 1;
  if (num === 0) return 0;
  else if (num < 0) {
    sig = -1;
    num = -num;
  }
  try {
    var arr = [];
    while (num != 0) {
      arr.push(num % 10);
      num = parseInt(num / 10);
    }
    for (let i = 0; i < arr.length; i++) {
      num = 10 * num + arr[i];
      if (num > MAXINT) throw new Error();
    }
    return sig * num;
  } catch (err) {
    console.log('Integer Overflow');
    return 0;
  }
}

var test1 = 123;
var test2 = -123;
var test3 = Math.pow(2, 32);
console.log(revInt(test3));
