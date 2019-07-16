// Homework - Optional JS

// 1. Input: [1,3,4,5,10] Output: ‘1,3-5,10’ (if values are consecutive, combine them with ‘-’). Follow-up:
// [1,3,3,4,4,5,10] Ouput:’1,3-5,10’ (Ignore duplicated)

const brief = inputArray => {
  // inputArray: array may with dup

  if (inputArray.length === 0) return '';
  let input = [...inputArray].sort((a, b) => {
    return a - b; // default sort by ASCII code
  });
  let arr = [[input[0]]]; // for output
  let inset = new Set(input);
  let inarr = Array.from(inset);
  console.log(inarr);
  let index = 0;
  for (let i = 1; i < inarr.length; i++) {
    if (inarr[i] - inarr[i - 1] > 1) {
      index++;
      arr.push([inarr[i]]); // 1,3,4
    } else {
      if (arr[index].length === 1) {
        arr[index].push(inarr[i]);
      } else if (arr[index].length === 2) {
        arr[index][1] = inarr[i];
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    // a of arr no use?
    if (arr[i].length === 2) {
      arr[i] = arr[i].join('-');
    }
  }
  let output = arr.join(',');
  return output;
};

let inputArray = [1, 2, 7, 4, 6, 12];
console.log(brief(inputArray));
// 2. Write a shortest function to check if a given number is Palindrome.

const isPalindrome = num => {
  // console.log((num + '').split(''));
  // console.log((num + '').split('').reverse());
  return (
    (num + '')
      .split('')
      .reverse()
      .join('') === (num + '').split('').join('')
  );
};
console.log(isPalindrome(32123));
