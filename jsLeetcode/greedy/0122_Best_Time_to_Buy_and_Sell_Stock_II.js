/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    let buyDay = 0, res = 0;
    for (let i=1;i<prices.length;i++) {
        if (prices[i] < prices[i-1]) {
            res += (prices[i-1] - prices[buyDay]);
            buyDay = i;
        } else if (i === prices.length - 1) {
            res += (prices[i] - prices[buyDay]);
        }
    }
    return res;
};
