// JavaScript Homework #5
// Reverse Words in a String II

// Given an input string, reverse the string word by word. A word is defined as a sequence of non-
// space characters.
// The input string does not contain leading or trailing spaces and the words are always separated
// by a single space.
// For example,
// Given s = "the sky is blue",
// return "blue is sky the".
// Could you do it in-place without allocating extra space?
// We have updated the function signature to accept a character array, so please reset to the
// default code definition by clicking on the reload button above the code editor. Also, Run Code is
// now available!
var s = 'the sky is blue';
var arr = s.match(/([\S])+/gi); // s.split(' ')
var rs = arr.reverse().join(' ');
console.log(rs);
