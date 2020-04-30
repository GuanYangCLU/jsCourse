/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length < 2) return nums.length;
    let curTail = 0;
    let curMax = 1;
    let maxFromTail = 1;
    for (let i=1;i<nums.length;i++) {
        if (nums[i] <= nums[curTail]) {
            curTail = i;
            maxFromTail = 1;
        } else {
            maxFromTail ++;
            curTail ++;
            curMax = Math.max(curMax, maxFromTail);
        }
    }
    return curMax;
};
