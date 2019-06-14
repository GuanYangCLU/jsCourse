// JavaScript Homework #2

// Object-Oriented Programming

// Problem 1:
// Create a class called shape that has the property type and a getType() method.
// Define a Triangle() class who is a subclass of shape. Triangle() class should have three own properties—a, b, and c, representing the lengths of the sides of a triangle.
// Add a new method to its prototype called getPerimeter() to get a triangle's perimeter.
// Test your implementation with the following code:
// > var t = new Triangle(1, 2, 3);
// > t.constructor === Triangle;

// true
// > shape.prototype.isPrototypeOf(t);
//         true
// > t.getPerimeter();
//        6
// > t.getType();

// "triangle"
// Loop over t showing only own properties and methods (none of the prototype's).
function Shape() {
  this.type = undefined;
  this.getType = function() {
    return this.type;
  };
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.getPerimeter = function() {
    return this.a + this.b + this.c;
  };
}

Triangle.prototype = new Shape(); // overwrite
Triangle.prototype.type = 'triangle';

var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);
console.log(Shape.prototype.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

// 	Problem 2:
// Make the following code work:
// > [1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();

// [2, 4, 1, 8, 9, 6, 5, 3, 7]
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/** 
function shuffle(arr) {
  var index;
  var len = arr.length;
  for (var i = len - 1; i > 0; i--) {
    index = Math.floor(Math.random() * i);
    arr[i] = arr.splice(index, 1, arr[i])[0]; // return the elem arr you delete
    // console.log(arr);
  }
  return arr;
}
console.log(shuffle(arr));
*/
Array.prototype.shuffle = function() {
  var index;
  var len = this.length;
  for (var i = len - 1; i > 0; i--) {
    index = Math.floor(Math.random() * i); // the index to swap is rand * interval
    this[i] = this.splice(index, 1, this[i])[0]; // return the elem arr you delete
    // console.log(arr);
  }
  return this;
};
console.log(arr.shuffle());

// pop() shift() unshift(a,b,c)
