/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote) return false;
    const base = Array.from(Array(26).keys()).map(idx => 'a'.charCodeAt(0) + idx);
    const obj = String.fromCharCode(...base).split('').reduce((accum, c) => ({ ...accum, [c]: 0 }), {})
    const dicRan = ransomNote.split('').reduce((accum, c) => ({ ...accum, [c]: accum[c] + 1 }), obj);
    const dicMag = magazine.split('').reduce((accum, c) => ({ ...accum, [c]: accum[c] + 1 }), obj);
    const ranValues = Object.values(dicRan);
    return Object.values(dicMag).reduce((accum, count, idx) => accum && count >= ranValues[idx], true);
};
