/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let ans = [1, 1]; // fibo n-1, n
  for (let i = 2; i <= n; i++) {
    ans.push(ans[i - 2] + ans[i - 1]);
  }
  return ans[n];
};
