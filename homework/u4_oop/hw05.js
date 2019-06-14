// JavaScript Homework #5

// Design and implement a TwoSum class. It should support the following methods: add and find.

// add - Add the number to an internal data structure.
// find - Find if there exists any pair of numbers which sum is equal to the given input.
// remove – Remove all occurrences of the given number from the internal data structure and return the number of occurrences removed.

// For example,

// add(1);
// add(3);
// add(5);
// find(4) -> true
// find(7) -> false

class TwoSum {
  constructor() {
    this.arr = [];
    this.pair = [];
  }
  add(num) {
    // var num = document.getElementById('num').value;
    // alert('sucecess! add: ' + num);
    this.arr.push(num);
    return num;
  }
  remove() {
    return this.arr.splice(0).length;
  }
  find(target) {
    // var target = document.getElementById('target').value;

    for (var i = 0; i < this.arr.length; i++) {
      if (this.pair[this.arr[i]] !== undefined) {
        // console.log(this.pair);
        // console.log(this.arr[i]);
        // console.log(i);
        this.pair = [];
        return true;
      } else {
        this.pair[target - this.arr[i]] = i;
        // console.log(target - this.arr[i]);
      }
    }
    this.pair = [];
    return false;
  }
}

var tt = new TwoSum();
// tt.add(1);
// tt.add(3);
// tt.add(5);
// console.log(tt.find(4));
// console.log(tt.find(7));
// console.log(tt.arr);
// console.log(tt.remove());
// console.log(tt.arr);
