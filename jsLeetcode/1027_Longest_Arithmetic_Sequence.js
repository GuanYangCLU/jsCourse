[Explain](https://leetcode.com/problems/longest-arithmetic-sequence/discuss/462600/85-speed-and-100-space-8-lines-DP-solution)

[js](https://leetcode.com/problems/longest-arithmetic-sequence/discuss/443308/Clean-JavaScript-Solution)

/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    let maxlen = 0;
    let dp = A.map(n => ({}));
    for (let i=1;i<A.length;i++) {
        for (let j=0;j<i;j++) {
            let step = A[i] - A[j];
            dp[i][step] = (`${step}` in dp[j]) ? dp[j][step] + 1 : 2;
            maxlen = Math.max(maxlen, dp[i][step]);
        }
    }
    return maxlen;
};

// no use
const isArith = arr => {
    if (!arr) return false;
    if (arr.length < 3) return true;
    let arr2 = arr.map((x, i) => x + arr[arr.length - i - 1]);
    return Array.from(new Set(arr2)).length === 1;
}
