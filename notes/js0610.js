// OOP

// Create object
// js will first check if the properties exist

// define a class
class Shoe {
  constructor(brand, model, size) {
    this.brand = brand;
    this.model = model;
    this.size = size;
    Shoe.count++;
  }

  // apply on instance
  equals(obj) {
    return (
      obj instanceof Shoe &&
      this.brand === obj.brand &&
      this.model === obj.model &&
      this.size === obj.size
    ); // deep comparison, ins1 === ins2: shallow, return false even val equal
  }

  // Apply only on class
  static createAny() {
    return Shoe.count > 0;
  }
}

class RunningShoe extends Shoe {
  constructor(brand, model, size, type) {
    super(brand, model, size);
    // more...
  }
}

// prototype
function Person() {}

Person.prototype.name = 'john';
Person.prototype.sayName = function() {
  console.log('this is' + this.name);
};

let person1 = new Person();
let person2 = new Person();

console.log(person1.name);
console.log(person2.name);
console.log(person1.sayName);

person1.name = 'Greg';
console.log(person1.name);

delete person1.name;
console.log(person1.name);

Person.prototype.name = 'jay';

// ***************************
function Person() {}
Person.prototype = {
  name: 'Nicholas',
  age: 29,
  job: 'SE',
  sayName: function() {
    console.log(this.name);
  }
};
let friend = new Person();

//

//
function Shape() {}

function TwoDShape() {}

function Triangle() {}

TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();
// Prototype Chainning

// ES2015 transfer to ES5

// ***** after class **********

// rest 在左边, give the rest all to me
//  destruvture在右边 open and reput in (for loop deep copy arr)

// anonymous func: 1. callback  2.iife
// 定义后找不到了

// apply call   this point to
const person = {
    name = "abc",
    age: 10
}
let a = 'aa';
console.log(person[a]) // person.a treat a as string then cannot get

// set 去重
const a = [1,2,3,3];
const set = new Set(a);
const res = [...set];

console.log(res); // [1,2,3]

// map
[
    [1,["abc","cde"]],
    [6,["f"]]
]

for (let entry of map){

}

map.get()
map.set()
map.has()
// map, set ES6