// JavaScript Homework #1 – Destructing

// What would the following lines of code output to the console? And explain why.

var foo = { bar: { deep: 'pony', dangerouslySetInnerHTML: 'lol' } };
var {
  bar: { deep, dangerouslySetInnerHTML: sure }
} = foo;
console.log(deep);
console.log(sure);
// myAns: pony, undefined
// trAns: pony, lol
// explain: deep's val was assigned with 'pony' and sure was assigned as 'lol'

function es6() {
  var left = 10;
  var right = 20;
  if (right > left) {
    //console.log([left,right]);
    [left, right] = [right, left];
  }
  // console.log([left,right]);
}
// myAns: [10, 20] become [20, 10]
// trAns: SAME
// explain: split(destructure)

var { foo } = { bar: 'baz' };
console.log(foo);
// myAns: baz
// trAns: undefined
// explain: console.log({ foo }) we get {foo:undefined} because foo was not assigned in the right obj { bar: 'baz' } but change to another structure foo: undefined
// console.log({ bar }) we get error: bar is not defined because we did not declare bar

var key = 'such_dynamic';
var { [key]: foo } = { such_dynamic: 'bar' };
console.log(foo);
// myAns: bar
// trAns: SAME
// explain: automately check the obj in array? if has the obj in the right then assign

var [a] = [];
console.log(a);
var [b = 10] = [undefined];
console.log(b);
var [c = 10] = [];
console.log(c);
// myAns: undefined, undefined, undefined
// trAns: undefined, 10, 10
// explain: @@@@@@@@@@@@@@@@@@@@@@@@

function getCoords() {
  return {
    x: 10,
    y: 22
  };
}
var { x, y } = getCoords();
console.log(x);
console.log(y);
// myAns: 10, 22
// trAns: SAME
// explain: after func excuted, it returns {x:10, y:22}

function random({ min = 1, max = 300 }) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random({}));
console.log(random({ max: 24 }));
// myAns: a random nb between 1 to 300, a random nb between 1 to 24
// trAns: SAME
// explain: no para then use default para

// To concatenate two strings through spread
// myAns:
// var str1 = 'hello';
// var str2 = 'world';
// var arr = [str1, str2];
// var str3 = [...arr].join('');
// console.log(str3);

// To combine multiple arrays through spread
// myAns:
// var arr1 = [1, 2];
// var arr2 = [3, 4];
// var arr3 = [...arr1, ...arr2];
// console.log(arr3);

// To select certain parameters over the others in a function
// myAns:
// function seleCert() {
//   return [1, 2, 3];
// }
// let [p1, , p2] = seleCert();
// console.log(p2);

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x);
console.log(y);
console.log(z);
// myAns: 1, 2, [3,4]
// trAns: 1, 2, {a:3, b:4}
// explain: spreads elements can represent all the elements rest and can only put at the last position.

// ***

function compare(a, b) {
  return a - b;
}
let result = compare(...[1, 2]);
console.log(result);
// myAns: -1
// trAns: SAME
// explain: same as compare(1,2)

// ***

var rivers = ['Nile', 'Ganges', 'Yangte'];
var moreRivers = ['Danube', 'Amazon'];
rivers.push(...moreRivers);
console.log(rivers);
// myAns: ['Nile', 'Ganges', 'Yangte', 'Danube', 'Amazon']
// trAns: SAME
// explain: array destructure

// ***

let chars = ['A', ...'BC', 'D'];
console.log(chars);
// myAns: ['A', 'B', 'C', 'D']
// trAns: SAME
// explain: string destructure
