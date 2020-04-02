/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (s.length < 2) return 0;
    let maxlen = 0;
    let pair = [];
    let dp = Array(s.length).fill(0);
    for (let i=0;i<s.length;i++) {
        if (s[i] === '(') {
            pair.push(i);
        } else if (pair.length) {
            let curStartIdx = pair.pop();
            dp[i] = i - curStartIdx + 1 + (curStartIdx > 1 ? dp[curStartIdx-1] : 0) // merge closed part & part before close
        }
    }
    return Math.max(...dp);
};
