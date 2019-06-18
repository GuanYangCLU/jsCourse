// JavaScript Homework #1

// Event Loop

// 1. What is the result of the following code? Explain your answer.
function printing() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
}
printing();
// myAns
// 1,4,3,2
// setTimeout is async function so js will throw them to async pool and wait at the end of request queue and execute sync code line by line first then based on respons time execute and return async function's results

// 2. Guess the output sequence and why?
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}
// myAns: 0,1,2,3
// trAns: 4,4,4,4
// because js don't wait async's results and just keep executing, so i keeps increasing and when i became 4 and end the sync part, async print start to execute and this time i has been 4

// 3. Guess the output sequence and why?
for (let i = 0; i < 4; i++) {
  (function(i) {
    setTimeout(() => console.log(i), 0);
  })(i);
}
// myAns: 0,1,2,3
// because each step is asyn and sync code don't have even output or value change, so js just wait async's execution result

// 4. Guess the output sequence and why?
console.log('Before the timeout');
setTimeout(function() {
  console.log('In the timeout function');
}, 0);
console.log('After the timeout');
// myAns:
// Before the timeout, After the timeout, In the timeout function
// because middle line is async function and js keeps executing the next line and finnally wait for the results of aysnc function

// 5. Used by Google and Amazon: what will the following code output?
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
// myAns:
// 4 lines of Index: 4 element: undefined
// becasue like the question 2, js will throw async part to async pool and keep execute sync code, so i swiftly became 4 and arr[4] is undefined

// fix: closure
for (var i = 0; i < arr.length; i++) {
  setTimeout(
    (function(x) {
      return () => {
        console.log('Index: ' + x + ', element: ' + arr[x]);
      };
    })(i),
    3000
  );
}

// 6. Write a stop timer that starts with a given number of seconds,
// and stops after the number reaches zero
// (for each second, you can console.log the current number).
function due(t) {
  for (let i = t; i > -1; i--) {
    console.log(i);
    sleep(1000);
  }
}

function sleep(ms) {
  let start = new Date().getTime();
  while (new Date().getTime() < start + ms) {}
}

due(5);

// setInterval  clearInterval
// setTimeOut   clearTimeOut?

function timer(t) {
  const ref = setInterval(function() {
    console.log(t--);
    if (t === -1) {
      clearInterval(ref);
    }
  }, 1000);
}

timer(2);
