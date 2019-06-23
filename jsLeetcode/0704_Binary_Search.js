/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // for (let i=0;i<nums.length;i++){
  //   console.log('leg: ' + nums.length);
  let start = 0;
  let end = nums.length - 1;
  //   let mid = Math.floor(nums.length/2);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    }
  }
  return -1;
};

// var helper = (nums,target) {
// if (!nums) return -1;
// if (nums.length === 1){
//     if (nums[0] !== target) return -1;
//     else return 0;
// }
// let i = Math.floor(nums.length / 2);
// // console.log(i, nums.length);
//     if (nums[i] === target) {
//         return i;
//     } else if (nums.length === 1) {
//         return -1;
//     } else if (nums[i] > target) {
//         search(nums.slice(0,i),target);
//     } else if (nums[i] < target) {
//         search(nums.slice(i+1, nums.length), target);
//     }
// return -1;
// return nums.length;
// }

var nums = [-1, 0, 3, 5, 9, 12];
var target = 9;
console.log(search(nums, target));
// console.log(nums.slice(0, 1));
