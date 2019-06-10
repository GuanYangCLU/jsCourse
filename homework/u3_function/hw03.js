// JavaScript Homework #3 – Function Parameters

// Look at following codes about passing values into functions. Indicate what’s the output and why

function f(x) {
  console.log(`inside f: x=${x}`);
  x = 5;
  console.log(`inside f: x=${x} (after assignment)`);
}
let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);
// myAns: 3, 3, 5, 5
// trAns: 3, 3, 5, 3
// explain: function assign scope is the function's curly braces, after execution, that x release

function f(o) {
  o.message = `set in f (previous value: '${o.message}')`;
}
let o = {
  message: 'initial value'
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);
// myAns: before calling f: o.message="initial value", after calling f: o.message="set in f (previous value: 'initial value')"
// trAns: SAME
// explain: self call

function f(o) {
  o.message = 'set in f';
  o = {
    message: 'new object!'
  };
  console.log(`inside f: o.message="${o.message}" (after assignment)`);
}
let o = {
  message: 'initial value'
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);
// myAns: before calling f: o.message="initial value"
// ** inside f: o.message="new object!" (after assignment)
// ** after calling f: o.message="new object!"
// trAns: before calling f: o.message="initial value"
// ** inside f: o.message="new object!" (after assignment)
// ** after calling f: o.message="set in f"
// explain: in function, fisrt assign set the 'let' o's message to set in f, this is assign(deepcopy) due to it is string(immutable), in the second assign, due to it is obj so it is shallow copy, only copy the reference, after the func execution, new obj o released and only have the 'let' o which msg was set to 'set in f'
