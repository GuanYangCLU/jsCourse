// JavaScript Homework #2

// Write following functions:

// 1. Write a JavaScript program to list the properties of any given JavaScript object.
// Sample object:
var student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12
};
// Sample Output: name,sclass,rollno

const getProp = obj => Object.getOwnPropertyNames(obj);
console.log(getProp(student));

// 2. Write a JavaScript program to get the length (# of properties) of any given JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12
// };
// Sample Output: 3

const getPropLen = obj => Object.getOwnPropertyNames(obj).length;
console.log(getPropLen(student));

// 3. Write a JavaScript function to print all the methods in any given JavaScript object.
const getEnumProp = obj => Object.keys(obj);
const getAllProp = obj => Object.getOwnPropertyNames(obj);
const getFuncProp = obj =>
  getAllProp(obj).filter(key => {
    let enumIndex = getEnumProp(obj).indexOf(key);
    return enumIndex === -1;
  });

console.log(getFuncProp(student));

// 4. Write a JavaScript function to parse any given URL into meaningful pieces.
let inputUrl = 'https://www.google.com/news/today/101316';
const parseURL = url => {
  let arr = [];
  let head = url.split('://');
  let body = head[1].split('/');
  arr.push(head[0], ...body);
  return arr;
};
console.log(parseURL(inputUrl));

// 5. Write a JavaScript function to retrieve all the names of any given object's own and inherited properties.

// console.log(getAllProperties(student));
// console.log(Object.getPrototypeOf(student));

const getAllProps = obj => {
  const props = [];
  do Object.getOwnPropertyNames(obj).forEach(p => props.push(p));
  while ((obj = Object.getPrototypeOf(obj))); // @@
  return props;
};
console.log(getAllProps(student));

// Optimzied - in case of same
// const getAllProps = obj => {
//   const props = new Set();
//   do Object.getOwnPropertyNames(obj).forEach(p => props.add(p));
//   while ((obj = Object.getPrototypeOf(obj)));
//   return Array.from(props);
// };
// console.log(getAllProps(student));
