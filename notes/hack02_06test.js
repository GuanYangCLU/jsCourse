let arr = [6, 1, 3, 46, 1, 3, 9];
let k = 47;

var ans = [];
var rs = [];
var i, j;
for (i = 0; i < arr.length; i++) {
  j = rs[k - arr[i]];
  if (j !== undefined) {
    if (arr[i] > k - arr[i]) {
      let ent = [k - arr[i], arr[i]].join(' ');
      //   if (!(ent in ans)) {
      // console.log(ent in ['1 46']);
      ans.push(ent);
    } else {
      let ent = [arr[i], k - arr[i]].join(' ');
      //   if (!(ent in ans)) {
      ans.push(ent);
      //   }
    }
  }
  rs[arr[i]] = i;
}
const removeDuplicateItems = arrd => [...new Set(arrd)];
console.log(removeDuplicateItems(ans).length);

/** 
let arr = [6, 1, 3, 46, 1, 3, 9];
let k = 47;

var ans = [];
var rs = [];
var i, j;
for (i = 0; i < arr.length; i++) {
  j = rs[k - arr[i]];
  if (j !== undefined) {
    if (arr[i] > k - arr[i]) {
      let ent = [k - arr[i], arr[i]].join(' ');
      if (!(ent in ans)) {
        console.log(ent in ['1 46']);
        ans.push(ent);
      }
    } else {
      let ent = [arr[i], k - arr[i]].join(' ');
      if (!(ent in ans)) {
        ans.push(ent);
      }
    }
  }
  rs[arr[i]] = i;
}
const removeDuplicateItems = arrd => [...new Set(arrd)];
console.log(removeDuplicateItems(ans));
*/

/**
let arr = [6, 1, 3, 46, 1, 3, 9];
let k = 47;

function countPairs(arr, k) {
  // Write your code here
  var ans = [];
  var rs = [];
  var i, j;
  for (i = 0; i < arr.length; i++) {
    j = rs[k - arr[i]];
    if (j !== undefined) {
      if (arr[i] > k - arr[i]) {
        let ent = [k - arr[i], arr[i]].join(' ');
        if (!(ent in ans)) {
          ans.push(ent);
        }
      } else {
        let ent = [arr[i], k - arr[i]].join(' ');
        if (!(ent in ans)) {
          ans.push(ent);
        }
      }
    }
    rs[arr[i]] = i;
  }
  let ansSet = new Set(ans);
  return ansSet.length;
}

console.log(countPairs(arr, k));
console.log(ans);
*/
