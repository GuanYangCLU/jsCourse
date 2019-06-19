// JavaScript Homework #5

// Given two strings S and T, determine if they are both one edit distance apart.

let S = 'java';
let T = 'jsva';

const checkOneEdit = (S, T) => {
  if (Math.abs(S.length - T.length) > 1) return false;
  let dif = 0,
    i = 0,
    j = 0;
  while (i < S.length && j < T.length) {
    if (S[i] !== T[j]) {
      if (dif > 0) return false;
      dif++;
      if (S.length > T.length) {
        i++;
      } else if (S.length < T.length) {
        j++;
      } else if (S.length === T.length) {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return dif < 2;
  //   else if (Math.abs(S.length - T.length) === 1) {
  //     // for (let i=0;i<)
  //   } else if (Math.abs(S.length - T.length) === 0) {
  //     return S.filter(x, i => x !== T[i]).length < 2;
  //   }
};

console.log(checkOneEdit(S, T));
// explicit question
// An edit between two strings is one of the following changes.

// Add a character
// Delete a character
// Change a character
// Given two string s1 and s2, find if s1 can be converted to s2 with exactly one edit. Expected time complexity is O(m+n) where m and n are lengths of two strings.
