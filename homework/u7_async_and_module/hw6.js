// JavaScript Homework #6

// Given a list of words and two words word1 and word2, return the shortest distance between these two
// words in the list.
// For example,
//  Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
//  Given word1 = “coding”, word2 = “practice”, return 3.
//  Given word1 = "makes", word2 = "coding", return 1.
// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
let words = ['practice', 'makes', 'perfect', 'coding', 'makes'];
// let word1 = 'coding';
// let word2 = 'practice';
let word1 = 'makes';
let word2 = 'coding';
const shortestDist = (words, word1, word2) => {
  let arr1 = [];
  let arr2 = [];
  let minlen = Infinity;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      arr1.push(i);
    }
    if (words[i] === word2) {
      arr2.push(i);
    }
    if (arr1 && arr2) {
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          minlen = Math.min(minlen, Math.abs(arr2[j] - arr1[i]));
        }
      }
    }
  }
  return minlen;
};

console.log(shortestDist(words, word1, word2));
