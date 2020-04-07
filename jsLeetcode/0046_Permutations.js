/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
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
    return probArr;
};

// use circle not recursion due to memory issue
// simple explain:
// O = pit for insert next number, | = current numbers in permutation list
// issue is to insert to any pit of ' O | O | O | O ...'
// for example, [1] can be inserted left or right: [2,1] or [1,2], then
// [[1,2],[2,1]] one of them can be inserted as [3,1,2], [1,3,2], or [1,2,3]
// so all permutation is 1*2*3*... = n!

// recursion helper:
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
