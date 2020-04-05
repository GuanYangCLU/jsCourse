// NEED TO get rid of Hard Code, for test just save time

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    const max = Math.max(a, b, c);
    if (max === a) {
        if (Math.floor(a / 2) - 1 >= b + c) {
            return 'aa' + (Array(b).fill('b')).concat(Array(c).fill('c')).join('aa') + 'aa'
        } else if (Math.floor(a / 2) - 1 < b + c && a - 1 >= b + c) {
            let stepOne = (Array(b).fill('ab')).concat(Array(c).fill('ac')).concat(['a']); // 'ababacaca'
            let leftA = a - b - c - 1;
            for (let i=0;i<b+c+1;i++) {
                if (leftA === 0) return stepOne.join('');
                stepOne[i] = 'a' + stepOne[i];
                leftA--;
            }
        } else {
            let stepOne = (Array(b).fill('ab')).concat(Array(a - b).fill('ac'));
            let leftC = b + c - a;
            console.log(leftC);
            for (let i=0;i<a+1;i++) {
                if (leftC === 0) return stepOne.join('');
                stepOne[i] = stepOne[i] + 'c';
                leftC--;
            }
        }
    }
    
    if (max === b) {
        if (Math.floor(b / 2) - 1 >= a + c) {
            return 'bb' + (Array(a).fill('a')).concat(Array(c).fill('c')).join('bb') + 'bb'
        } else if (Math.floor(b / 2) - 1 < a + c && b - 1 >= a + c) {
            let stepOne = (Array(a).fill('ba')).concat(Array(c).fill('bc')).concat(['b']);
            let leftB = b - a - c - 1;
            for (let i=0;i<a+c+1;i++) {
                if (leftB === 0) return stepOne.join('');
                stepOne[i] = 'b' + stepOne[i];
                leftB--;
            }
        } else {
            let stepOne = (Array(a).fill('ba')).concat(Array(b - a).fill('bc'));
            let leftC = a + c - b;
            for (let i=0;i<b+1;i++) {
                if (leftC === 0) return stepOne.join('');
                stepOne[i] = stepOne[i] + 'c';
                leftC--;
            }
        }
    }
    
    if (max === c) {
        if (Math.floor(c / 2) - 1 >= b + a) {
            return 'cc' + (Array(b).fill('b')).concat(Array(a).fill('a')).join('cc') + 'cc'
        } else if (Math.floor(c / 2) - 1 < b + a && c - 1 >= b + a) {
            let stepOne = (Array(b).fill('cb')).concat(Array(a).fill('ca')).concat(['c']);
            let leftC = c - b - a - 1;
            for (let i=0;i<b+a+1;i++) {
                if (leftC === 0) return stepOne.join('');
                stepOne[i] = 'c' + stepOne[i];
                leftC--;
            }
        } else {
            let stepOne = (Array(b).fill('cb')).concat(Array(c - b).fill('ca'));
            let leftA = b + a - c;
            for (let i=0;i<c+1;i++) {
                if (leftA === 0) return stepOne.join('');
                stepOne[i] = stepOne[i] + 'a';
                leftA--;
            }
        }
    }
};
