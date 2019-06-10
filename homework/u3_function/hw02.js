// JavaScript Homework #2 - Destructing

// Look at following codes about parameter destructuring. Indicate what’s the output and why

function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}
const o = {
  subject: 'I',
  verb: 'love',
  object: 'JavaScript'
};

getSentence(o);
// myAns: I love Javascript
// trAns: SAME
// explain: para des

function getSentence([subject, verb, object]) {
  return `${subject} ${verb} ${object}`;
}
const arr = ['I', 'love', 'JavaScript'];

getSentence(arr);
// myAns: I love Javascript
// trAns: SAME
// explain: js will des array's para

function addPrefix(prefix, ...words) {
  const prefixedWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

addPrefix('con', 'verse', 'vex');
// myAns: ['converse', 'convex']
// trAns: SAME
// explain: ...words Array destructure
