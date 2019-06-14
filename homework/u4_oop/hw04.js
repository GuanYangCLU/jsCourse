// JavaScript Homework #4

// In OOP, a singleton class is very useful and defined as a class that can only have a single instance. If more than one instance is created, the class should either return the same previously instantiated object, or an error.

// Using both ES5 and ES2015, implement a singleton classes and prove it is indeed singleton.

/**
function singleton() {
  this.inst = null;
  this.getInstance = function() {
    return this.inst ? this.inst : new singleton();
  };
  this.name = 'singleton';
  this.method = function() {
    return 'I am ' + this.name;
  };
}

var tt = new singleton();
console.log(tt.name);
console.log(tt.method());
console.log(tt.inst);
console.log(tt.getInstance());

 */

class singleton {
  constructor() {
    this.inst = null;
    this.name = 'singleton';
  }
  getInstance() {
    return this.inst ? this.inst : new singleton();
  }
  method() {
    return 'I am ' + this.name;
  }
}

var tt1 = new singleton();
console.log(tt1);
console.log(tt1.name);
console.log(tt1.method());
console.log(tt1.inst);
console.log(tt1.getInstance());

var tt2 = new singleton();
console.log(tt2);
console.log(tt2.name);
console.log(tt2.method());
console.log(tt2.inst);
console.log(tt2.getInstance());

console.log(tt1 === tt2); // need fix

// answer
const Singleton = (function() {
  var instance = null;
  return function() {
    if (!instance) {
      instance = this;
      return instance;
    } else {
      return instance;
    }
  };
})();

const a = new Singleton();
const b = new Singleton();
console.log(a === b);
