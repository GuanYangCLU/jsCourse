/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a,b) => a - b);
    const sum = nums.reduce((acc, n) => acc + n, 0);
    let cur = 0;
    let res = [];
    for (let i=nums.length-1;i>-1;i--) {
        cur += nums[i];
        res.push(nums[i]);
        if (cur > Math.floor(sum / 2)) {
            return res;
        }
    }
    return res;
};
