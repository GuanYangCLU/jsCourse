/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let rs = [];
    for (let i=0;i<n;i++) {
        if ((i+1)%3 === 0 && (i+1)%5 === 0) {
            rs[i] = 'FizzBuzz';
        } else if ((i+1)%3 === 0 && (i+1)%5 !== 0) {
            rs[i] = 'Fizz';
        } else if ((i+1)%3 !== 0 && (i+1)%5 === 0) {
            rs[i] = 'Buzz';
        } else {
            rs[i] = (i+1).toString();
        }
    }
    return rs;
};
