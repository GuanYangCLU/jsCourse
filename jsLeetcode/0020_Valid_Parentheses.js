/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;
  let dic = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let sarr = s.split('');
  let arr = [];
  for (let i = 0; i < sarr.length; i++) {
    arr.push(sarr[i]);
    if (i === 0) {
    } else if (dic[arr[arr.length - 2]] === arr[arr.length - 1]) {
      arr.pop();
      arr.pop();
    }
  }
  console.log(arr, sarr);
  return arr.length === 0;
};

let s1 = '()';
let s2 = '[()]';
let s3 = '[])';
console.log(isValid(s1));
