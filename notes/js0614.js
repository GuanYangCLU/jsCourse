// parseInt('a')  // will get NaN !!!!!!

// Event-Driving execution

// multi-process / thread pool

// js single-thread

// setTimeout  seInterval  : js 2 async func
setTimeout(f, t); // t: delay time f: function  //实现：异步？

while (new Data() - start < 100) {} // 实现： 同步？

// blocking operations : sleep(1000): while ...< ..millseconds

//Non-Blocking Operations
// rs = database.query(...);

// assync programming
// methods:
// callback
// promise

// callback
// query cnanot reach immediately should put in call back func to process
// Java
// r = db.query(Q);
// r ...do sth

// Javascript
// db.query(q1, cbfunc(err,r1){})

//Java
// r1= db.query(q1); r2=db.query(q2) ; r3 = db.query(q3) ;
// f(r1,r2,r3)

// db.query(q1,func(e,r1){
//     do(sth);
//     // r1 available here
//     db.query(q2,func(e,r2){
//          // r1, r2 available here
//         db.query(q3, func(e,r3){
//             // r1, r2,r3 available here
//             f(r1,r2,r3);
//         });
//     });
// });

// callback hell

// error and exception handling

// in 'use strict' if you do not declare just assigned a value, it will error
// console.error();

// throw

// call stack
// console.log(err.stack) //逐层调用
// throw to where it can catch err? level to up level...?

// try catch finally
// dont throw err from in callback func to outside, outside code has been executed for long time(many seconds), throw cannot be catched by outside catch, we can just do try catch inside callback function

// after ES6, use let instead of var     (var hoisting)
