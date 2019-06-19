// var x = 119;
// console.log(x.toString(8)[x.toString(8).length - 1]);

// const regularExpression = new RegExp(
//   /[a-z]{1,6}(?:(_)[0-9]{0,4}|)@{1}hackerrank\.com/m
// );
// let input = 'julia@hackerrank.com';
// let input2 = 'julia_@hackerrank.com';
// let input3 = 'julia_0@hackerrank.com';
// let input4 = 'julia0_@hackerrank.com';
// let input5 = 'julia@gmail.com';
// let input6 = 'julia066@hackerrank.com';

// const r = /[a-z]{1,6}_*[0-9]{0,4}@{1}hackerrank.com/im;
// console.log(regularExpression.test(input6));
// console.log('6');

// ans
// const regularExpression = new RegExp(/^[a-z]{1,6}_{0,1}[0-9]{0,4}@{1}hackerrank\.com/m);

// let arr = [1, 2, 3];
// arr[arr.length] = 4;

// var txt = new Array('kim', 'jim');
// console.log(txt);

// function isPossible(a, b, c, d) {
//   // Write your code here
//   let p1 = false;
//   let p2 = false;
//   for (let i = 0; i < 1001; i++) {
//     for (let j = 0; j < 1001; j++) {
//       if (a * i + b * j === c) p1 = true;
//     }
//   }
//   for (let i = 0; i < 1001; i++) {
//     for (let j = 0; j < 1001; j++) {
//       if (a * i + b * j === d) p2 = true;
//     }
//   }
//   return p1 && p2 ? 'Yes' : 'No';
// }

// backtracking
// function helper(a, b, c, d) {
//   // Write your code here
//   if (a === c && b === d) {
//     // console.log('ans ', a, b, c, d);
//     return true;
//   } else if (a > c || b > d) {
//     // console.log('invali ', a, b, c, d);
//     return false;
//   } else if (a <= c && b <= d) {
//     // console.log('vali ', a, b, c, d);
//     return helper(a + b, b, c, d) || helper(a, a + b, c, d);
//   }
// }

// function isPossible(a, b, c, d) {
//   return helper(a, b, c, d) ? 'Yes' : 'No';
// }
// console.log(isPossible(1, 2, 3, 6)); //no
// console.log(isPossible(1, 4, 5, 9));
// console.log(isPossible(1, 3, 4, 7));
// console.log(isPossible(1, 3, 4, 12)); //no
// console.log(isPossible(1, 2, 17, 29));
// console.log(isPossible(1, 2, 8, 5));

var start = [1, 2, 3, 4];

permute(start.length, start);

// Generate the permutation for a given n (amount of elements) and a given array
function permute(n, arr) {
  // If only 1 element, just output the array
  if (n == 1) {
    console.log(arr);
    return;
  }

  for (var i = 0; i < n; i += 1) {
    permute(n - 1, arr);

    // If n is even
    if (n % 2 == 0) {
      swap(arr, i, n - 1);
    } else {
      swap(arr, 0, n - 1);
    }
  }
}

function swap(arr, idxA, idxB) {
  var tmp = arr[idxA];
  arr[idxA] = arr[idxB];
  arr[idxB] = tmp;
}
