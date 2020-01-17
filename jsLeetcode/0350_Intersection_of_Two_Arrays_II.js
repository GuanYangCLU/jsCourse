/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const bigArr = nums1.length >= nums2.length ? nums1 : nums2;
    const smallArr = nums1.length < nums2.length ? nums1 : nums2;
    let bigDict = bigArr.reduce((accum, num) => {
        if (num in accum) {
            return { ...accum, [num]: accum[num] + 1 };
        } else {
            return { ...accum, [num]: 1 }
        }
    }, {});
   const output = smallArr.reduce((accum, num) => {
        if (`${num}` in bigDict && bigDict[num] > 0) {
            bigDict = { ...bigDict, [num]: bigDict[num] - 1 };
            return [ ...accum, num ];
        }
        return accum;
    }, []);
    return output;
};
