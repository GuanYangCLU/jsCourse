/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    const kvmaps = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    const res = digits.split('').map(num => kvmaps[num].split('')).reduce(
        (accum, numArr) => numArr.reduce(
            (acc, last) => acc.concat(accum.length ? accum.map(prev => prev + last) : [last]), []
        ), []
    )
    return res;
}
