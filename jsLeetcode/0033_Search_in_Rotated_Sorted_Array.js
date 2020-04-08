/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.length) return -1;
    if (nums.length === 1) return nums.indexOf(target);
    let move = Math.ceil(nums.length / 4);
    let idx = Math.ceil(nums.length / 2);
    let energy = nums.length;
    while (move > 0 && energy > 0) {
        // console.log(idx, move);
        if (nums[idx] === target) return idx;
        if (nums[idx] > target) idx = idx - move > -1 ? idx - move : idx - move + nums.length;
        if (nums[idx] < target) idx = idx + move < nums.length ? idx + move : idx + move - nums.length;
        move = Math.floor(move / 2);
        if (move === 0) {
            energy -= 1;
            move +=1;
        }
    }
    return -1;
};
