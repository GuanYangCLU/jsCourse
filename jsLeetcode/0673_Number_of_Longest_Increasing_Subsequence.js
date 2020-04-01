/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    if (!nums.length) return 0;
    let maxlen = 1;
    let numOfMax = 0;
    let stateOfLenCount = Array(nums.length).fill([1,1]);
    for (let i=0; i<nums.length;i++) {
        for(let j=0;j<i;j++) {
            if (nums[j] < nums[i]) {
                if (stateOfLenCount[j][0] + 1 > stateOfLenCount[i][0]) {
                    stateOfLenCount[i] = [stateOfLenCount[j][0] + 1, stateOfLenCount[j][1]]; // cannot assign like python
                } else if (stateOfLenCount[j][0] + 1 === stateOfLenCount[i][0]) {
                    stateOfLenCount[i] = [stateOfLenCount[i][0], stateOfLenCount[i][1] + stateOfLenCount[j][1]];
                }
            }
        }
        if (stateOfLenCount[i][0] === maxlen) {
            numOfMax += stateOfLenCount[i][1];
        } else if (stateOfLenCount[i][0] > maxlen) {
            maxlen = stateOfLenCount[i][0];
            numOfMax = stateOfLenCount[i][1];
        }
    }
    return numOfMax;
};
