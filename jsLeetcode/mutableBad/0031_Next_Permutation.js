/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nums = [1,2,3];

var nextPermutation = function(nums) {
    if (nums.length < 2) return nums;
    if (isDesc(nums)) return nums.sort((a,b) => a-b);
    let res = [];
    for (let i=nums.length-1;i>-1;i--) {
        const left = nums.slice(0, i);
        const right = nums.slice(i, nums.length);        
        if (!isDesc(right)) {
            const posI = Math.min(...right.map(val => val - nums[i]).filter(v => v > 0)) + nums[i];
            const posIndex = right.indexOf(posI);
            let subtail = right.splice(posIndex, 1);
            right.sort((a,b) => a-b);
            const tail = subtail.concat(right);
           res = left.concat(tail);
           break;
        } 
    }
    return nums.map((n, idx) => {
                nums[idx] = res[idx];
            });
};

const isAsc = arr => {
    const arr2 = arr.join(',').split(',');
    arr2.sort((a,b) => a-b);
    return arr2.join(',') === arr.join(',');
}

const isDesc = arr => {
    const arr2 = arr.join(',').split(',');
    arr2.sort((a,b) => b-a);
    return arr2.join(',') === arr.join(',');
}
