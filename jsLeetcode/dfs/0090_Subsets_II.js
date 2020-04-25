/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = new Set(), cur = [];
    if (!nums.length) return [];
    withOrNot(nums, 0, cur, res);
    return Array.from(res).map(str => str ? str.split(',') : []);
};

const withOrNot = (nums, i, cur, res) => {
    if (i === nums.length) {
        let tmp = cur.map(n => n);
        tmp.sort((a,b) => a - b);
        elem = tmp.join(',');
        res.add(elem);
    }
    else {
        cur.push(nums[i]);
        withOrNot(nums, i+1, cur, res);
        cur.pop();
        withOrNot(nums, i+1, cur, res);
    }
}
