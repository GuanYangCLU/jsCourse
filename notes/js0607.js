// function rewrite itself
function a() {
  console.log('A!');
  a = function() {
    console.log('B!');
  };
}

a(); // A! -- excute the outer a() and assign a to a new function
a(); // B! -- excute the new a() which is inner a()
a(); // B! -- a doesn't change

function a() {
  console.log('A!');
  var a = function() {
    console.log('B!');
  };
}

a(); // A! -- var a scope is the outer function curly braces, a assign then release
a(); // A! -- same, a assigned and then released

// UNCHECK COMPILE *****************

// anonymous function
// let F1 = createCF('fname');
// c1 = F1(o1, o2)   c2 = F1(o3, o1)     performance better, but less professional
// c1 = createCF('fname')(o1, o2)   c2 = createCF('fname')(o1, o3)

var firstf = function() {
  var counter = 0;
  return function() {
    // excuted
    return (counter += 1); // not excuted, just declare and return
  };
};
var add = firstf(); // create only one closure

add(); // 0
add(); // 1
add(); // 2

firstf()(); // create 3 different closures, so they all = 0
firstf()();
firstf()();

// closure loop

// 答疑
// js parameter arguments
// console.log(arguments)

// var function block
// a = 3 dont have a var? put at the top of the outer scope
var a = 1;
function b() {
  function a() {}
  a = 10;
  console.log(typeof a);
  return;
}
b();
