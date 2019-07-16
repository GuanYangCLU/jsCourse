/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0] >= target ? 0 : 1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (right > left) {
    if (nums[left] >= target) {
      return left;
    } else if (nums[right] < target) {
      return right + 1;
    } else if (nums[right] === target) {
      return right;
    }
    let pos = Math.floor((left + right) / 2);
    // console.log(pos);
    if (nums[pos] === target) {
      return pos;
    } else if (nums[pos] > target) {
      right = pos;
    } else if (nums[pos] < target) {
      if (pos > left) {
        left = pos;
      } else if (pos === left) {
        return left + 1;
      }
    }
  }
  // return left + 1;
};
