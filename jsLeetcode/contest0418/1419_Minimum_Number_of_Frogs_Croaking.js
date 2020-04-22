/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    let dic = {
        c: 0,
        r: 0,
        o: 0,
        a: 0,
        k: 0
    };
    let hold = 0, res = 0;
    for (let i=0;i<croakOfFrogs.length;i++) {
        if (!(croakOfFrogs[i] in dic)) {
            return -1;
        }
        else {
            dic[croakOfFrogs[i]] = dic[croakOfFrogs[i]] + 1;
            if (croakOfFrogs[i] === 'c') {
                hold++;
            } else if (croakOfFrogs[i] === 'k') {
                hold--;
            }
        }
        res = Math.max(res, hold);
        if (dic['c'] < dic['r'] || dic['r'] < dic['o'] || dic['o'] < dic['a'] || dic['a'] < dic['k']) {
            return -1;
        }
    }
    const dicVals = Object.values(dic);
    if ((Math.max(...dicVals) === Math.min(...dicVals)) && hold === 0) {
        return res
    } else {
        return -1;
    }
};
