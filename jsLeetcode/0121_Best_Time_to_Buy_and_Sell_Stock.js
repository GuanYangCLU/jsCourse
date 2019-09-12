// Good
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let rs = 0;
    if (prices.length < 2) return 0;
    let minIndex = 0;
    for (let i=1;i<prices.length;i++){
        // console.log(maxHelper(i-1,prices));
        if (prices[i] < prices[minIndex]) minIndex = i;
        rs = Math.max(rs, prices[i] - prices[minIndex]);
    }
    return rs > 0 ? rs : 0;
};

// bad
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let rs = 0;
    if (prices.length < 2) return 0;
    for (let i=1;i<prices.length;i++){
        // console.log(maxHelper(i-1,prices));
        rs = Math.max(rs, maxHelper(i, prices));
    }
    return rs > 0 ? rs : 0;
};

const maxHelper = (index, arr) => {
    return Math.max(...arr.slice(0,index).map(p => arr[index] - p));
}
