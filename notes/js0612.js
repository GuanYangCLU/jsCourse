// RegEx

// InPlace   copyWithIn() unshift() splice()
a = [1, 2, 3];
console.log(a.concat(5)); // [1,2,3,5]
console.log(a); // [1,2,3]

// reverse
console.log(a.reverse());
console.log(a);

arr = [5, 3, 2, 4, 10];
console.log(arr.sort()); // alpha numeric
console.log(arr.sort((a, b) => a - b));
function comp(a, b) {
  return a - b;
}

console.log(arr.sort(comp));

// object shallow comparison, need deep comparison

// find
// arr3 = [{age: 3, name:"aab"}]

// Number.isInteger(Math.sqrt(x))
// (x,i) => how to identify func of x and i?@@@@@@@@

// arr's id is index number?

//forEach
// items.forEach(item => copy1.push(item));
const cart = [
  { name: 'widget', price: 9.95 },
  { name: 'gardet', price: 22.95 }
];

const names = cart.map(x => x.name);
const prices1 = cart.map(x => x.price);
const discountPrices = prices1.map(x => x * 0.8);

console.log(names, prices1, discountPrices);
// const cart1 = cart.map((x, i) => x.price[i] * 0.8); mis
// console.log(cart1);

//filter
const catt = cart.filter(x => x.price > 10);
console.log(catt);

// reduce
let arr7 = [5, 7, 4, 2];
let sum = arr7.reduce((a, x) => (a += x), 0); // 0: initial value a // can also ''
console.log(sum);

// RegEx
// pattern  /Java(Script)?/
// \0  \f
// anchor character
// \d digit \w character
// character class
// [...] anyone between brackets
// [0-9]   [a-z] [^0-9]  [0-9][0-9]
// [^...] anyone not between

// repetition
// {n,m} at least n times but no more than m times
// {n,} n or more
//
// alternation (or)
// /ab|cd/

// grouping
// /(ab|cd)+|ef/
// + at least once
// ef   ab cd abab abcd cdab cdcd
// (script)?   optional, can have 0 or 1

// match
var str = 'abc de fg';
var re = /def?/;
var found = str.match(re);
console.log(found.index);
console.dir(found);

const input = 'As I was going to Saint Ives';
const re1 = /\w{3,}/gi;
const re2 = /\w{3,}/i;

let fg = input.match(re1);
let f = input.match(re2);
console.log(fg);
console.log(fg.index);
console.log(f);
console.log(f.index);

// exec

console.log(re1.exec(input));
console.log(re1.lastIndex);

console.log(re1.exec(input));
console.log(re1.lastIndex);

console.log(re1.exec(input));
console.log(re1.lastIndex);
// continue search next

// dont have g? (global)

console.log(re2.exec(input));
console.log(re2.lastIndex);

console.log(re2.exec(input));
console.log(re2.lastIndex);

console.log(re2.exec(input));
console.log(re2.lastIndex);
// all from 0

// replace
const output = input.replace(/\w{4,}/gi, '***');
console.log(output);

// style guide
