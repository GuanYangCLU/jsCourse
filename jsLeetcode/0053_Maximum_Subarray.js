/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums) return 0;
  if (nums.length === 1) return nums[0];
  // let left = 0;
  // let right = 0;
  // let arr = nums.slice(left,right+1); // [L, ... , R]
  // let maxSum = arr.reduce((a,b) => a + b);
  let maxSum = nums[0];
  let curMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + curMax > nums[i]) {
      curMax += nums[i]; // sum([...arr, next(i)])
    } else {
      // indicate curMax <= 0
      curMax = nums[i];
    }
    maxSum = Math.max(curMax, maxSum);
  }
  return maxSum;
};
// DP, analyze, understand, and recite
