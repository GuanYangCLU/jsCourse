// JavaScript Homework #4

// Missing Ranges
// Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.
// For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74",
// "76->99"].
let inputArr = [0, 1, 3, 50, 75]; // sorted
let lower = 0; // assume lower <= inputArr[0], upper >= inputArr[len-1]
let upper = 99;

const missRange = (inputArr, lower, upper) => {
  let arr = [...inputArr];
  let ms = [];
  if (arr[0] !== lower) {
    arr.unshift(lower - 1); // expand range by 1
  }
  if (arr[arr.length - 1] !== upper) {
    arr.push(upper + 1); // expand range by 1
  }
  for (let i = 1; i < arr.length; i++) {
    // lower contained as arr[0], must be least
    if (arr[i] - arr[i - 1] > 1) {
      if (arr[i] - arr[i - 1] > 2) {
        ms.push((arr[i - 1] + 1).toString() + '->' + (arr[i] - 1).toString());
      } else {
        ms.push(arr[i - 1] + 1);
      }
    }
  }
  //   console.log(arr);
  return ms;
};

console.log(missRange(inputArr, lower, upper));
