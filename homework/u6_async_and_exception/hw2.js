// JavaScript Homework #2

// Consider the following code. What will the output be, and why?
(function() {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

// myAns:
// Error object, undefined, undefined
// trAns:
// 1, undefined, 2
// In catch block, x is primarily declared as err from try and assigned as 1, outside catch block, x just be declared but not assigned, y is assigned in function scope

/**
 * 还原hoist
(function() {
    var x,y;
    try {
      throw new Error();
    } catch (x) {
      x = 1,
        y = 2;
      console.log(x);
    }
    console.log(x);
    console.log(y);
  })();
*/
