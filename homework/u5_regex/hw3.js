// JavaScript Homework #3 - RegEx

// Please study following RegExp patterns and find out why:

// example 1
const myString =
  '99 bottles of beer on the wall ' +
  'take 1 down and pass it around -- ' +
  '98 bottles of beer on the wall.';

const match = myString.match(/[\-0-9a-z.]/gi);

const match = myString.match(/[^\-0-9a-z.]/);

const match = myString.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);

const match = myString.match(/[0-9]+/);

// myAns:
// 1st row: all the words of sentence and -., in bracket it means match all input matches -, number, and letters, i means ignore differences between upper and lower case, g means global match which means search in the whole input one by one
// 2nd row: ' ' because only ' ' does not match in input
// 3rd row: 99 because it find match the first number permutation in the whole input which is 99
// 4th: 99 same as 3rd

// example 2
const stuff = 'hight: 9\n' + 'medium: 5\n' + 'low: 2\n';

const levels = stuff.match(/:\s*[0-9]/g);
// myAns:
// : 9, : 5, : 2   because : does not have special function and \s* can match 0 or more, then match a number in global

// example 3
const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');
// myAns
// 505551515 because \d means digital so \D means not digital so all signs and space are replaced by ''

// example 4
const field = ' something ';
const valid = /\S/.test(field);
// myAns
// true because there are inputs which are not space, and test just return true/false

// example 5
const input =
  'Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.';
const match = input.match(/\d{5}.*/);

const equation = '(2 + 3.5) * 7';
const match = equation.match(/\(\d \+ \d\.\d\) \* \d/);
// myAns
// 55532. Phone: 555-555-2525. because it match the first 5-digits with . and any other stuff

// example 6
const text = 'Visit oreilly.com today!';
const match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
// myAns
// oreilly.com because it matches letters with a suffix among .com, .org and .edu

// example 7
const promo = 'Opening for XAAX is the dynamic GOOG! At the box office now!';
const bands = promo.match(/([A-Z])([A-Z])\2\1/g);
// myAns
// XAAX GOOG because it is global match and \2 will back to the 2nd search in () and match the same result, so does \1, if first 2 matches X,A then \2 has to be A and \1 has to be X

// example 8
const input = 'One two three';
input.replace(/two/, '($`)'); // "One (One ) three"
input.replace(/\w+/g, '($&)'); // "(One) (two) (three)"
// myAns
// "One (One ) three"
// "(One) (two) (three)"
// We would seldom use this expression

// example 9
const input = 'It was the best of times, it was the worst of times';
const beginning = input.match(/^\w+/g); // "It"
const end = input.match(/\w+$/g); // "times"
const everything = input.match(/^.*$/g); // sames as input
const nomatch1 = input.match(/^best/gi);
const nomatch2 = input.match(/worst$/gi);
// myAns
// It ------- because when ^ not in [] it means the start position so it matchs the 1st word
// times ----- because $ means the end position so it matches the last word
// all the sentences because it could start with anything and end with anything
// null because the input does not start with best
// null because the input does not end with worst

// example 10
const input = 'One line\nTwo lines\nThree lines\nFour';
const beginnings = input.match(/^\w+/gm); // ["One", "Two", "Three", "Four"]
const endings = input.match(/\w+$/gm); // ["line", "lines", "lines", "Four"]
// myAns
// ["One", "Two", "Three", "Four"] beacuse m means multiple line match so it will match each line's first word
// ["line", "lines", "lines", "Four"] beacuse m means multiple line match so it will match each line's last word

// example 11
const inputs = [
  'john@doe.com', // nothing but the email
  'john@doe.com is my email', // email at the beginning
  'my email is john@doe.com', // email at the end
  'use john@doe.com, my email', // email in the middle, with comma afterward
  'my email:john@doe.com.' // email surrounded with punctuation
];

const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/gi;
inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));

// returns [
// "<a href="mailto:john@doe.com">john@doe.com</a>",
// "<a href="mailto:john@doe.com">john@doe.com</a> is my email",
// "my email is <a href="mailto:john@doe.com">john@doe.com</a>",
// "use <a href="mailto:john@doe.com">john@doe.com</a>, my email",
// "my email:<a href="mailto:john@doe.com>john@doe.com</a>.",
// ]

// myAns
// it will transfer each input's email address to the link which could enable clients send email to these links by click them
// because \b means boundary and email format is letters, numbers and _.-'s permutation with @ and letters permutation with . and ltters permutation
// then replace to an html label of mail to link to this email address
