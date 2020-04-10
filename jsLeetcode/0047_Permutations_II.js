/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (!nums.length) return [];
    if (nums.length === 1) return [nums];
    let probArr = [[nums[0]]];
    for (let m=1;m<nums.length;m++) {
        let nextArr = [];
        for (let i=0;i<probArr.length;i++) {
            for (let j=0;j<probArr[i].length+1;j++) {
                nextArr.push([ ...probArr[i].slice(0,j), nums[m], ...probArr[i].slice(j, probArr[i].length)]);
            }
        }
        probArr = nextArr;
    }
    const strPermu = probArr.map(item => item.join(','));
    return Array.from(new Set(strPermu)).map(item => item.split(','));
};

const helper = (probArr, nums, index) => {
    let nextArr = [];
    for (let i=0;i<probArr.length;i++) {
        for (let j=0;j<probArr[i].length+1;j++) {
            nextArr.push([ ...probArr[i].slice(0,j), nums[index], ...probArr[i].slice(j, probArr[i].length)]);
        }
    }
    if (index === nums.length - 1) {
        return nextArr;
    }
    return helper(nextArr, nums, index+1);
}
