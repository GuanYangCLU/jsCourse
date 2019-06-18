// JavaScript Homework #4

// The following recursive code will cause a stack overflow if the array list is too large. How can
// you fix this and still retain the recursive pattern?
var list = readHugeList();
var nextListItem = function() {
  var item = list.pop();
  if (item) {
    // process the list item...
    nextListItem();
  }
};
// fixed:
var list = readHugeList();
var nextListItem = function() {
  var item = list.pop();
  if (item) {
    // process the list item...
    setTimeout(nextListItem(), 0);
  }
};
// because it makes nextListItem executed in async pool which memory size is large enough for many levels recursion
