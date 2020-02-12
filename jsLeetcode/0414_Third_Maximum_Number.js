/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const deDup = Array.from(new Set(nums));
    const res = deDup.reduce((accum, num) => {
        if (accum.length < 3) {
            accum.push(num);
        } else {
            const tempMin = Math.min(...accum);
            const minIdx = accum.indexOf(tempMin);
            if (num > tempMin) {
                accum.splice(minIdx, 1);
                accum.push(num);
            }
        }
        return accum;
    },[]);
    return res.length === 3 ? Math.min(...res) : Math.max(...res);
};
