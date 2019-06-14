// JavaScript Homework #1

// These problems are related to JavaScript Object:

// What will the code below output to the console and why?

var myObject = {
  foo: 'bar',
  func: function() {
    var self = this;
    console.log('outer func:  this.foo = ' + this.foo);
    console.log('outer func:  self.foo = ' + self.foo);
    (function() {
      console.log('inner func:  this.foo = ' + this.foo);
      console.log('inner func:  self.foo = ' + self.foo);
    })();
  }
};
myObject.func();
// myAns:
// inner func:  this.foo = undefined
// inner func:  self.foo = bar
// outer func:  this.foo = bar
// outer func:  this.foo = bar
//
// trAns:
// outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar
//
// explain: when delare a function, even it is an iife it does not execute, still need to call the function
// because myObject call the func, so the outer this point to myObject and its foo is 'bar', for the iife function, it called by ittself, so this point to the iife and has no foo property

// What will the following code output to the console and why:

var hero = {
  _name: 'John Doe',
  getSecretIdentity: function() {
    return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// What is the issue with this code and how can it be fixed.
// myAns:
// undefined
// 'John Doe'
// fix:
// console.log(stoleSecretIdentity.bind(hero)());
// in browser: window // in node: global

// Assuming d is an “empty” object in scope, say:

var d = {};

// …what is accomplished using the following code?

['zebra', 'horse'].forEach(function(k) {
  d[k] = undefined;
});
// myAns:
// push 2 keys in obj d: d = {zebra: undefined, horse: undefined}

// What is the output out of the following code? Explain your answer.

var a = {},
  b = { key: 'b' },
  c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// myAns: 123
// trAns: 456
// when we set b as a key of obj a, the key b should be automatically transfered to string:'Object Object', so as c, the process is like: a = {'object Object': 123}, then a = {'Object Object': 456}, the key of obj transfer to string is same.

// const a = Object.prototype.toString.call({});
// console.log(a)  // [object Object]

// Array.isArray([])  // === "[object Array]"
