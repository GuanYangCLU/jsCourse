/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let times = 2;
    let flag = true;
    if (s.length < 2) return false;
    while (times <= s.length) {
        if (s.length % times === 0) {
            let children = {};
            flag = true;
            const subLen = s.length / times;
            for (let i=1;i<times;i++) {
                if (s.slice(i * subLen, (i + 1) * subLen) !== s.slice((i - 1) * subLen, i * subLen)) flag = false;
            }
            if (flag) return true;
        } else {
            flag = false;
        }
        times ++;
    }
    return flag;
};
