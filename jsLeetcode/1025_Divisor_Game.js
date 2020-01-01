/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    let aWin = false;
    if (N === 1) return false;
    if (N === 2) return true;
    let maybeX = [];
    for (let i=1 ; i < N; i++) {
        if (N % i === 0 && !maybeX.includes(i)) {
            maybeX.push(i);
        }
    }
    // const maybeNext = maybeX.map(x => N - x);
    // return maybeNext.reduce((accum, item) => !divisorGame(item) || accum, false);
    const nxt = N - maybeX.pop();
    return !divisorGame(nxt) || !divisorGame(N-1);
};
