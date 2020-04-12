/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    if (!nums.length) return 0;
    nums.sort((a, b) => a - b);
    return nums.reduce((accum, n, idx) => accum + (idx % 2 === 0 ? n : 0), 0);
};
