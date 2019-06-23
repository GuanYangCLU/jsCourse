const m1 = require('./1-node-module1.js');
console.log(m1.geometricSum(1, 2, 5)); // logs 31
console.log(m1.quadraticFormula(1, 2, -15)); // logs [ 3, -5 ]

const m2 = require('./1-node-module2.js');
console.log(m2.geometricSum(1, 2, 5)); // logs 31
console.log(m2.quadraticFormula(1, 2, -15)); // logs [ 3, -5 ]