const input = 'It was the best of times, it was the worst of times';
const beginning = input.match(/^\w+/g); // "It"
const end = input.match(/\w+$/g); // "times"
const everything = input.match(/^.*$/g); // sames as input
const nomatch1 = input.match(/^best/gi);
// console.log(match2, match3, match4);
console.log(nomatch1);
