/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // bad requirement, will cause side effect outside (nums changed)
    if (k > nums.length) k = k % nums.length;
    let head = nums.splice(0, nums.length - k);
    for (let i=0; i<head.length; i++) {
        nums.push(head[i]);
    }
    // nums = [...nums.concat([...nums]).slice(nums.length - k, 2 * nums.length - k)]
    return nums
};
