/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) return [];
    const res = [];
    nums.sort((a,b) => a-b);
    for (let i=0;i<nums.length - 3;i++) {
        for (let j=i+1;j<nums.length-2;j++) {
            let k = j+1;
            let l = nums.length - 1;
            while (k<l) {
                const sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]]);
                    l--;
                    k++;
                }
                if (sum > target) l--;
                if (sum < target) k++;
            }
        }    
    }
    return Array.from(new Set(res.map(arr => arr.join(',')))).map(str => str.split(','));
};
