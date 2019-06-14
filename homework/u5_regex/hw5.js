/**
 * 
 * JavaScript Homework #5 - Function

1. Implement int sqrt(int x).
Compute and return the square root of x.

2. Given a binary array, find the maximum number of consecutive 1s in this array.
Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive
1s.
The maximum number of consecutive 1s is 3.
Note:
 The input array will only contain 0 and 1.
 The length of input array is a positive integer and will not exceed 10,000

3. Write a function to find the longest common prefix string amongst an array of strings.

4. Write a program that outputs the string representation of numbers from 1 to n.
But for multiples of three it should output “Fizz” instead of the number and for the multiples of
five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
Example:
n = 15,
Return:
[
"1",
"2",
"Fizz",
"4",
"Buzz",
"Fizz",
"7",
"8",
"Fizz",
"Buzz",
"11",
"Fizz",
"13",
"14",
"FizzBuzz"] 
 */

// Q1
const sq = a => {
  for (var i = 0; i <= a; i++) {
    if (i * i === a) return i;
  }
  return 'No int Square Root';
};

var b = 48; // int input
console.log(sq(b));

// Q2
var input = [1, 1, 0, 1, 1, 1];
const maxNbC = input => {
  var len = 0,
    maxLen = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] === 1) {
      len++;
      if (i === input.length - 1) {
        maxLen = Math.max(maxLen, len);
        // console.log(maxLen, len);
        len = 0;
      }
    } else if (input[i] === 0) {
      maxLen = Math.max(maxLen, len);
      len = 0;
    }
  }
  return maxLen;
};
console.log(maxNbC(input));

// Q3
var str = ['convea', 'conlooo', 'copve'];
var str2 = ['aabbc', 'aabb', 'aab'];
const findPrefix = str => {
  var lenOfStr = str.map(x => x.length);
  var minLen = Math.min(...lenOfStr);
  var rs = '';
  console.log(rs);
  for (var i = 0; i < minLen; i++) {
    rs += str[0][i];
    for (var j = 0; j < str.length; j++) {
      if (rs[i] === str[j][i]) continue;
      else return rs.substring(0, i);
    }
  }
  return rs;
};
console.log(findPrefix(str));
console.log(findPrefix(str2));

// Q4
var n = 15;
const fizzBuzz = n => {
  var arr = [];
  for (var i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) arr.push('FizzBuzz');
    else if ((i + 1) % 3 === 0) arr.push('Fizz');
    else if ((i + 1) % 5 === 0) arr.push('Buzz');
    else arr.push(i + 1);
  }
  return arr;
};
// console.log(fizzBuzz(n));
