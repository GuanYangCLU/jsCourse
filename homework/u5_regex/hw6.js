// JavaScript Homework #6 - Function

// 1. Write a JavaScript program that
// a. Takes an integer as input, such as Y
// b. Displays (or Returns) a two-dimensional array (YxY) as follows (with Y=4):

// 1    2   3   4
// 12   13  14  5
// 11   16  15  6
// 10   9   8   7
// For output, you can either simply write the resulting matrix to the console, or better show an
// html table in a browser.

// VARIABLE NEED: offset ((0,0), (1,1), ...), size (length)
// Input: Y;
// Output: Y*Y matrix, Y is integer

// @main
function printMatrix(y) {
  let mat = matrixInit(y);
  //   console.log(mat);
  let offset = 0;
  let size = y;
  let status = 0;
  let startNumber = 1;
  while (size > 0) {
    printSide(mat, status, offset, size, startNumber);
    // console.log(printSide(mat, status, offset, size, startNumber));
    // console.log('assigned sn: ' + startNumber);
    // why cannot assign return val to startnumber?
    startNumber += size - 1;
    // console.log('assigned sn: ' + startNumber);
    // console.log('size,off: ' + size + ', ' + offset);
    if (status === 3) {
      size -= 2;
      offset++; // next offset
    }
    status = status === 3 ? 0 : status + 1; // (status+1)%4

    if (size === -1) {
      mat[offset - 1][offset - 1] = y * y; // offset would have been next but end
    }
  }
  return mat;
}

// @init
function matrixInit(y) {
  let matrix = [];
  for (let i = 0; i < y; i++) {
    matrix.push([]);
    for (let j = 0; j < y; j++) {
      matrix[i].push(0);
    }
  }
  return matrix;
}

// @print each side, return is optional, because still not figure out why I cannot assign return to startNumber
function printSide(matrix, status, offset, size, startNumber) {
  curVal = startNumber;

  //   console.log('st val: ' + curVal);
  switch (status) {
    case 0: // l -> r
      for (let i = offset; i < offset + size - 1; i++) {
        // console.log(matrix);
        // console.log(offset, i);
        matrix[offset][i] = curVal;
        curVal++;
      }
      //   console.log('cv: ' + curVal);
      return curVal;

    case 1: // up -> dn
      for (let i = offset; i < offset + size - 1; i++) {
        // console.log(offset);
        // console.log(matrix);
        matrix[i][offset + size - 1] = curVal;
        curVal++;
      }
      //   console.log('2cv: ' + curVal);

      return curVal;

    case 2: // r -> l
      for (let i = offset + size - 1; i > offset; i--) {
        matrix[offset + size - 1][i] = curVal;
        curVal++;
      }
      //   console.log('3cv: ' + curVal);

      return curVal;

    case 3: // dn -> up
      for (let i = offset + size - 1; i > offset; i--) {
        matrix[i][offset] = curVal;
        curVal++;
      }

      return curVal;

    default:
      //   console.log('df cv: ' + curVal);
      return curVal;
  }
}

// @test result
console.log(printMatrix(4));
