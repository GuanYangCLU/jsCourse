// const regularExpression = new RegExp(
//   /[a-z]{1,6}_*[0-9]{0,4}@{1}hackerrank\.com/m
// );
// let input = 'julia@hackerrank.com';
// let input2 = 'julia_@hackerrank.com';
// let input3 = 'julia_0@hackerrank.com';
// let input4 = 'julia0_@hackerrank.com';
// let input5 = 'julia@gmail.com';

// const r = /[a-z]{1,6}_*[0-9]{0,4}@{1}hackerrank.com/im;
// console.log(regularExpression.test(input5));
// console.log('5');

// var x = 119;
// console.log(x.toString(8)[x.toString(8).length - 1]);
// console.log(parseInt(x, 8));

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

function perm(str) {
  var ret = [];

  if (str.length == 1) return [str];
  if (str.length == 2) return [str, str[1] + str[0]];

  str.split('').forEach(function(chr, idx, arr) {
    var sub = [].concat(arr); // "clone" arr
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

// console.log(perm('61'));
var arr = ['61', '57', '215', '66553', '3731231211'];
console.log(checkDivisibility(arr));
// old排列方法最大支持到9位'373123121', 似乎和转八进制方法无关
