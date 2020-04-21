/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let res = [];
    if (!words.length) return [];
    for (let i=0;i<words.length - 1;i++) {
        for (let j=i+1;j<words.length;j++) {
            if (words[i].indexOf(words[j]) !== -1) {
                if (!res.includes(words[j])) {
                    res.push(words[j]);
                }
            } else if (words[j].indexOf(words[i]) !== -1) {
                if (!res.includes(words[i])) {
                    res.push(words[i]);
                }
            }
        }
    }
    return res;
};
