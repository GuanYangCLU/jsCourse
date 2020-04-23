/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    let cur = [];
    dfs(nums, 0, cur, res);    
    return res;
};

const copy = arr => arr.map(n => n);

const dfs = (nums, i, cur, res) => {
    if (i===nums.length) {
        res.push(copy(cur)); // iterate all, no choice, no next, just push
    } else{
        cur.push(nums[i]); // select current number into comb to see the next step
        dfs(nums, i+1, cur, res);
        cur.pop();
        console.log(cur); // without current number in comb to see the next step
        dfs(nums, i+1, cur, res);
    }
}

    //             start
    //           /       \
    //        with N[0]   without N[0]
    //       /        \
    //    with N[1]    without N[1]

// if (!nums.length) return [];
    // for (let i=0;i<nums.length;i++) {
    //     let left = [];
    // let keep = 1;
    //     let right = copy(nums);
    //     for (let j=0;j<nums.length - keep;j++) {
    //         left = left.concat([ nums[j] ]);
    //         right = nums.slice(j+1);
    //         res.push(copy(left), copy(right));
    //     }
    //     keep++;
    //     const head = nums.shift();
    //     nums.push(head);
    // }
