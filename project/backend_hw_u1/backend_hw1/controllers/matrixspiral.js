exports.printMatrix = y => {
  let mat = matrixInit(y);
  //   console.log(mat);
  let offset = 0;
  let size = y;
  let status = 0;
  let startNumber = 1;
  while (size > 0) {
    printSide(mat, status, offset, size, startNumber);

    startNumber += size - 1;

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
};

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

  switch (status) {
    case 0: // l -> r
      for (let i = offset; i < offset + size - 1; i++) {
        matrix[offset][i] = curVal;
        curVal++;
      }
      return curVal;

    case 1: // up -> dn
      for (let i = offset; i < offset + size - 1; i++) {
        matrix[i][offset + size - 1] = curVal;
        curVal++;
      }

      return curVal;

    case 2: // r -> l
      for (let i = offset + size - 1; i > offset; i--) {
        matrix[offset + size - 1][i] = curVal;
        curVal++;
      }

      return curVal;

    case 3: // dn -> up
      for (let i = offset + size - 1; i > offset; i--) {
        matrix[i][offset] = curVal;
        curVal++;
      }

      return curVal;

    default:
      return curVal;
  }
}

// @test result
// console.log(printMatrix(4));
