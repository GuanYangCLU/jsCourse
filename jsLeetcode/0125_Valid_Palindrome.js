/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s || s.length === 1) return true;
  let arr = s
    .replace(/[^0-9a-zA-Z]+/g, '')
    .toLowerCase()
    .split('');
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
  }
  return true;
};

let s1 = 'A man, a plan, a canal: Panama';
let s2 = 'race a car';
console.log(isPalindrome(s1));
