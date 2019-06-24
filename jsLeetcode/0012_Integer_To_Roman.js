/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // let dic = {
  //     'I': 1,
  //     'V': 5,
  //     'X': 10,
  //     'L': 50,
  //     'C': 100,
  //     'D': 500,
  //     'M': 1000
  // };
  let arr = [];
  while (num !== 0) {
    arr.push(num % 10); // [4,9,9,1]
    num = Math.floor(num / 10);
  }
  console.log(arr);
  let arr2 = [];
  for (let i = arr.length - 1; i > -1; i--) {
    arr2.push(trans(arr.pop() * Math.pow(10, i))); // [1000,900,90,4] -> [M]
  }
  console.log(arr2);
  let rs = '';
  while (arr2.length > 0) {
    rs = rs + arr2.shift();
  }
  return rs;
};

const trans = n => {
  if (n < 4) {
    let c = '';
    while (n > 0) {
      c = c + 'I';
      n--;
    }
    return c;
  } else if (n === 4) {
    return 'IV';
  } else if (n === 5) {
    return 'V';
  } else if (n > 5 && n < 9) {
    let c = 'V';
    while (n > 5) {
      c = c + 'I';
      n--;
    }
    return c;
  } else if (n === 9) {
    return 'IX';
  } else if (n >= 10 && n < 40) {
    let c = '';
    while (n >= 10) {
      c = c + 'X';
      n -= 10;
    }
    return c;
  } else if (n === 40) {
    return 'XL';
  } else if (n === 50) {
    return 'L';
  } else if (n > 50 && n < 90) {
    let c = 'L';
    while (n > 50) {
      c = c + 'X';
      n -= 10;
    }
    return c;
  } else if (n === 90) {
    return 'XC';
  } else if (n >= 100 && n < 400) {
    let c = '';
    while (n >= 100) {
      c = c + 'C';
      n -= 100;
    }
    return c;
  } else if (n === 400) {
    return 'CD';
  } else if (n === 500) {
    return 'D';
  } else if (n > 500 && n < 900) {
    let c = 'D';
    while (n > 500) {
      c = c + 'C';
      n -= 100;
    }
    return c;
  } else if (n === 900) {
    return 'CM';
  } else if (n >= 1000 && n < 4000) {
    let c = '';
    while (n >= 1000) {
      c = c + 'M';
      n -= 1000;
    }
    return c;
  }
};
