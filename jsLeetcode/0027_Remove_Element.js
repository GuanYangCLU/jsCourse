/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let count = 0;
  let nlen = nums.length;
  for (let i = 0; i < nlen; i++) {
    if (nums[i] === val) {
      count++;
      nums.unshift(nums.splice(i, 1));
    }
  }
  nums.splice(0, count);
  // console.log(nums);
  return nums.length;
};
