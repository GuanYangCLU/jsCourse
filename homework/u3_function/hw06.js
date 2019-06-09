/**
 * Given:
    a=1 b=2 c=3 d=4 e=5 f=6 ... z=26,
    And
    abc -> 1 + 2 + 3 = 6
    bdc -> 2 + 4 + 3 = 9
    fc -> 6 + 3 = 9
    For input: "abc cde adb dfb def ee abcd cc"
    Output will be:
    {
     "6": ["abc", "cc"],
     "12": ["cde", "dfb"],
     "7": ["adb"],
     "15": ["adb", "def"],
     "10": ["ee", "abcd"]
    }
    Write a function to do so.
 */
// var stdStr = require('string');

var input = 'abc cde adb dfb def ee abcd cc';

/**
 * @api {calc} / Request input information
 * @apiName calc
 * @apiGroup input
 *
 * @apiParam {str} array element of origin input string to words array.
 *
 * @apiSuccess {int} sum of input word char to int value.
 */
const calc = str => {
  var arr = str.split('');
  var sum = 0;
  // var a2 = [...str];
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].charCodeAt(0) - 96; // String.fromChatCode(ASC_Nb1,ASC_Nb2,...)
  }
  return sum;
  //   console.log('is: ' + sum);
};

/**
 * @api {rs} / Request input information
 * @apiName rs
 * @apiGroup input
 *
 * @apiParam {input} array element of origin input string to words array.
 *
 * @apiSuccess {Object} JSON results of word's char to int value sum as key and words array as value.
 */
const rs = input => {
  var str = input;
  var arr = str.split(' ');
  var ans = {}; // new Object(), if output needs dic then use Array(), similar
  for (var i = 0; i < arr.length; i++) {
    // console.log(calc(arr[i]));
    if (!(calc(arr[i]) in ans)) {
      ans[calc(arr[i])] = [arr[i]];
    } else {
      ans[calc(arr[i])].push(arr[i]);
    }
  }
  return ans;
  // console.log(arr);
};

console.log(rs(input));
