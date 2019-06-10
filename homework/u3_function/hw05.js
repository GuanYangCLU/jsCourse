// JavaScript Homework #5

// Create a deck of card
// A deck of cards consists of 52 cards.
// It looks like this:
// 1 of Spades, 2 of Spades, 3 of Spades,... 13 of Spades.
// 1 of Hearts, 2 of Hearts, 3 of Hearts, ...13 of Hearts.
// 1 of Diamonds, 2 of Diamonds, 3 of Diamonds,...13 of Diamonds.
// 1 of Clubs, 2 of Clubs, 3 of Clubs...13 of Clubs.
//
// 1. Initialize the deck of cards programmatically(don’t just hard code).
// 2. Print out all cards
// 3. Shuffle cards
// 4. Print out shuffled cards again
//
// The format of the 1st print out (13 cards per line):
// 1 of Spades, 2 of Spades, 3 of Spades,... 13 of Spades.
// 1 of Hearts, 2 of Hearts, 3 of Hearts, ...13 of Hearts.
// 1 of Diamonds, 2 of Diamonds, 3 of Diamonds,...13 of Diamonds.
// 1 of Clubs, 2 of Clubs, 3 of Clubs...13 of Clubs.
//
// The format of the 2nd print out (13 cards per line):
// - randomize in each color/line
// Spades - 10 , Spades - 4, Spades - 11, Spades - 2, ....
// Hearts - 5, ...
// Diamonds - 6, ...
// Clubs - 5, ...

// You need to print cards in each color in random order. So there will be 4 lines, each line has 13 cards of same color in a random order.

// The format of the 3rd print out (13 cards per line):
// - randomize across color / line
// Clubs - 5, Diamonds - 2, Spades - 1, Spades - 2, ...
// Spades - 10, ...
// Hearts - 5, ...
// Diamonds - 6, ...

// You need to print cards in total random order. So there will be 4 lines, each line has 13 cards that can be in different color in a random order.
const color = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
var nb = new Array(13);
var i = nb.length;
while (i--) {
  nb[i] = i + 1;
}

const card_init = (color, nb) => {
  var ln = [];
  for (var i = 0; i < color.length; i++) {
    for (var j = 0; j < nb.length; j++) {
      ln.push(color[i] + nb[j]);
    }
    // for (var j = 0; j < nb.length; j++) {
    //   j === 12
    //     ? console.log(color[i] + nb[j] + '.')
    //     : process.stdout.write(color[i] + nb[j] + ', ');
    // }
  }
  //   Print out card decks
  for (var k = 0; k < ln.length; k++) {
    k % 13 === 12
      ? console.log(ln[k] + '.')
      : process.stdout.write(ln[k] + ', ');
  }
};

const card_shuffle_line = (color, nb) => {
  var ln = [];

  for (var i = 0; i < color.length; i++) {
    nb.sort(() => {
      return Math.random() - 0.5;
    });
    for (var j = 0; j < nb.length; j++) {
      ln.push(color[i] + nb[j]);
    }
  }

  for (var k = 0; k < ln.length; k++) {
    k % 13 === 12
      ? console.log(ln[k] + '.')
      : process.stdout.write(ln[k] + ', ');
  }
};

const card_shuffle_all = (color, nb) => {
  var ln = [];

  for (var i = 0; i < color.length; i++) {
    for (var j = 0; j < nb.length; j++) {
      ln.push(color[i] + nb[j]);
    }
  }

  for (var k = 0; k < ln.length; k++) {
    ln.sort(() => {
      return Math.random() - 0.5;
    });
    k % 13 === 12
      ? console.log(ln[k] + '.')
      : process.stdout.write(ln[k] + ', ');
  }
};

card_init(color, nb);
card_shuffle_line(color, nb);
card_shuffle_all(color, nb);
