/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (!nums) return false;
    s = new Set(nums);
    return Array.from(s).length !== nums.length;
};
