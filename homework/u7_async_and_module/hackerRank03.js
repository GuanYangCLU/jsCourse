// 1 email validation PASS TEST
const regularExpression = new RegExp(
  /^[a-z]{1,6}_{0,1}[0-9]{0,4}@{1}hackerrank\.com/m
);

// 2 去除链表中比x大的节点
function removeNodes(listHead, x) {
  // Write your code here
  if (!listHead.next || !listHead) {
    return;
  } else if (x < listHead.next.data) {
    listHead.next = listHead.next.next;
    return removeNodes(listHead.next, x);
  } else {
    return removeNodes(listHead.next, x);
  }
}

// 3 (a,b) 可选变(a+b,b) or (a,a+b)最终变换得坐标(c,d)

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

// 后来自解
// backtracking
function helper(a, b, c, d) {
  // Write your code here
  if (a === c && b === d) {
    // console.log('ans ', a, b, c, d);
    return true;
  } else if (a > c || b > d) {
    // console.log('invali ', a, b, c, d);
    return false;
  } else if (a <= c && b <= d) {
    // console.log('vali ', a, b, c, d);
    return helper(a + b, b, c, d) || helper(a, a + b, c, d);
  }
}

function isPossible(a, b, c, d) {
  return helper(a, b, c, d) ? 'Yes' : 'No';
}
console.log(isPossible(1, 2, 3, 6)); //no
console.log(isPossible(1, 4, 5, 9));
console.log(isPossible(1, 3, 4, 7));
console.log(isPossible(1, 3, 4, 12)); //no
console.log(isPossible(1, 2, 17, 29));
console.log(isPossible(1, 2, 8, 5));

// 4 排列找8倍数
function checkDivisibility(arr) {
  // Write your code here
  let rs = [];
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < perm(arr[i]).length; j++) {
      if (
        // parseInt(perm(arr[i])[j]).toString(8)[
        //   parseInt(perm(arr[i])[j]).toString(8).length - 1
        // ] === '0'
        checkEight(perm(arr[i])[j])
      ) {
        rs.push('YES');
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      rs.push('NO');
    } else {
      flag = 0;
    }
  }
  return rs;
}

// permutation ref:
// https://gist.github.com/customcommander/e9af9da584ff3a33f5ed
function perm(str) {
  var ret = [];

  if (str.length == 1) return [str];
  if (str.length == 2) return [str, str[1] + str[0]];

  str.split('').forEach(function(chr, idx, arr) {
    var sub = [].concat(arr);
    sub.splice(idx, 1);
    perm(sub.join('')).forEach(function(perm) {
      ret.push(chr + perm);
    });
  });

  return ret;
}

function checkEight(num) {
  return num % 8 === 0;
}
// old排列方法最大支持到9位'373123121', 似乎和转八进制方法无关

// 标准方法 heap 为什么分奇偶？
// https://en.wikipedia.org/wiki/Heap%27s_algorithm
// https://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/
// https://xaviergeerinck.com/solve-permutation-heaps
// https://juejin.im/post/59d89df56fb9a00a59598bf0
// var start = [1, 2, 3, 4];

// permute(start.length, start);

// // Generate the permutation for a given n (amount of elements) and a given array
// function permute(n, arr) {
//   // If only 1 element, just output the array
//   if (n == 1) {
//     console.log(arr);
//     return;
//   }

//   for (var i = 0; i < n; i += 1) {
//     permute(n - 1, arr);

//     // If n is even
//     if (n % 2 == 0) {
//       swap(arr, i, n - 1);
//     } else {
//       swap(arr, 0, n - 1);
//     }
//   }
// }

// function swap(arr, idxA, idxB) {
//   var tmp = arr[idxA];
//   arr[idxA] = arr[idxB];
//   arr[idxB] = tmp;
// }

// 5 regex abcd balance
// 6,7 multiple choice
// 8
