/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const numSet = Array.from(new Set(nums));
    const correctArray = [ ...Array(nums.length).keys()].map((val, idx) => idx + 1);
    return correctArray.reduce((accum, num) => !numSet.includes(num) ? [ ...accum, num ] : accum, []);
};
