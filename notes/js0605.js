// clg -> shortcut console.log
// ctrl + alt + N
let name = 'test';
let age = 25;

function hello() {
  return 'hello, ' + name;
}

function getBirthYear() {
  j = 2;
  return new Date().getFullYear() - j;
}

// var declares variables in function scope

// { let x;}

function f() {
  var i = 1;
  console.log('now 1: ' + i);
  function f1() {
    console.log('now 1: ' + i);
  }
  f1();
  // var i = 2;
  console.log('now 1: ' + i);
}
f();
// console.log('now 1: ' + i);

function y() {
  // var i = 1;
  for (var i = 0; i < 3; i++) {
    console.log('inside i: ' + i);
  }
  console.log('outside i: ' + i);
}
y();

// let
// declares varas in block scope
//

{
  let i = 1;
  console.log('inner i: ' + i);
}
// console.log('outer i: ' + i);  // wrong
let vals1 = [];
for (let x1 = 0; x1 < 4; x1++) {
  vals1.push(x1);
}
// console.log('after loop, x1: ' + x1);

// const
// delares an immutable varas in block scope
// must be initialized and con't be changed

// immutable: you cannot change address, but you can change value *****
const o = { name: 'john', age: 20 };
// o = {};

o.age = 25; //ok
console.log(o);

o.sex = 'female';
console.log(o);

Object.freeze(o); // set cant change
o.age = 10;
console.log(o);

// Variable masking
// vars and cons with same name in dif scopes
{
  let x = 'blue';
  console.log(x);
  {
    let x = 3;
    console.log(x);
  }
  console.log(x);
}
//  variables stores in heap(stack,FIFO) ...?

// Hoisting
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
// 其实是JS解析器的解析原因，它会将当前作用域中声明的所有变量和函数，放在作用域的最开始处。但是变量只有其声明被提前在作用域的最开始处，赋值结果仍然还在原来位置

console.log(x); // undefined
console.log(y); //

var x = 3;
y = 1;

console.log('x = ' + x);

function z() {
  i = 'string';
  console.log(i);
  var i = 1;
}
z(); // string

// use delete to delete a variable: delete x;

// 'use strict' has function scope

function f() {
  'use strict';
  let j = 2;
  console.log(j);
}
f();
// recommend use 'use strict' at first;  use let

// deep copy VS shallow copy
// address1: value1
// address2: value1
// b = a
// a = address1, b = address1

let a1 = [1, 2, 3];
let a2 = [1, 2, 3];
let s = '1,2,3';

console.log(a1 == a2); // flase
console.log(a1 == s); // true
console.log(a2 == s); // true

var s1, s2;
s1 = 'unchanged';
s2 = s1;
s2 = 'changed';

var arr1, arr2;
arr1 = [1, 2, 3];
arr2 = arr1;
arr1.push(4);

var o1, o2;
o1 = { name: 'unchanged', age: 5 };
o2 = o1;
o1.name = 'changed';
console.dir(o1);
console.dir(o2);

var o3, o4;
o3 = { name: 'unchanged name', age: 5 };
o4 = o3;
o3 = { name: 'changed name', age: 5 }; // new assign to another address
console.log('o3.name: ' + o3.name + 'o4.name: ' + o4.name);

var f1, f2;
f1 = function() {
  // do sth
};
f2 = f1;

// == only conpares references (shallow comparance)
// if both tyoe are not same, then convert to string to compare
// aa1.toString      collision convertion?

// Functions
// a block of reusable code
// parameterized
let mutiply = new Function('x', 'y', 'return x*y');

function mutiply(x, y) {
  return x * y;
}

let mutiply = function(x, y) {
  return x * y;
};

let mutiply = (x, y) => x * y;

// function declaration
// return statement is optional, if no return, js returns undefined

// function exression

// function hoisting

// scope of functions
// function as property/method

// calling functions
// calling VS referencing

// functions are objects (or object instances)
// let f = function(){}   create a memory block, then assign the function to the block
function getGreeting() {
  return 'hello';
}
getGreeting(); // 'hello'
getGreeting; // function getGreeting()
const f = getGreeting;
f(); // 'hello'
// use typeof to test f,f()

var sayhi;
if (somecondition) {
  sayhi = function() {
    console.log('hi');
  };
} else {
  sayhi = function() {
    console.log('yo');
  };
}
sayhi();

function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
}
// operator: callback function

var operators = {
  add: function(x, y) {
    return x + y;
  },
  substract: function(x, y) {
    return x - y;
  },
  multiply: function(x, y) {
    return x * y;
  },
  divide: function(x, y) {
    return x / y;
  },
  pow: Math.pow(x, y)
};

function operate2() {}
