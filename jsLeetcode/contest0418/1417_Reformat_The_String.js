/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let alphaArr = [];
    let numArr = [];
    let res = ''
    for (let i=0;i<s.length;i++) {
        if (Number.isNaN(parseInt(s[i]))) {
            alphaArr.push(s[i]);
        } else {
            numArr.push(s[i]);
        }
    }
    if (Math.abs(numArr.length - alphaArr.length) > 1) {
        return ''
    } else if (numArr.length > alphaArr.length) {
        for (let i=0;i<s.length;i++) {
            if (i%2 === 0) {
                res = res + `${numArr[i/2]}`          
            } else {
                res = res + `${alphaArr[(i-1)/2]}`
            }
        }
    } else {
        for (let i=0;i<s.length;i++) {
            if (i%2 === 0) {
                res = res + `${alphaArr[i/2]}`;      
            } else {
                res = res + `${numArr[(i-1)/2]}`;
            }
        }
    }
    return res;
};
