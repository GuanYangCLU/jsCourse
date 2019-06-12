// https://www.hackerrank.com/interview/interview-preparation-kit?h_l=domains&h_r=hrw&utm_source=hrwCandidateFeedback
//1
// record each time cut how many bamboos
var lengths = [1, 2, 3, 4, 3, 3, 2, 1];
function cutBamboo(lengths) {
  // Write your code here
  lengths.sort();
  //   console.log(lengths);
  var arr = [];
  var count = 1;
  var len = lengths.length;
  if (lengths[0] !== 0) {
    arr.push(lengths.length);
  }
  for (var i = 1; i < lengths.length; i++) {
    // if (lengths[0] !== 0) {
    //   arr.push(lengths.length);
    // } else {
    // if (i > 0) {
    if (lengths[i] === lengths[i - 1]) {
      count++;
    } else {
      len = len - count;
      arr.push(len);
      count = 1;
    }
    // }
    // }
  }
  return arr;
}
console.log(cutBamboo(lengths));

// solu2
/**
function cutBamboo(lengths) {
  var cutCount = [];

  var vcount = 0;
  while (vcount < 5) {
    lengths = cut(lengths);
    cutCount.push(lengths.splice(lengths.length - 1, 1));
    vcount++;
  }

  return cutCount;
}

function check(lengths) {
  var count = 0;
  for (var i = 0; i < lengths.length; i++) {
    if (lengths[i] == 0) {
      count++;
    }
  }

  if (count == lengths.length) {
    return false;
  } else {
    return true;
  }
}

function cut(lengths) {
  let shortcut = 99999;
  let count = 0;
  for (var i = 0; i < lengths.length; i++) {
    if (lengths[i] < shortcut && lengths[i] != 0) {
      shortcut = lengths[i];
    }
  }
  for (var i = 0; i < lengths.length; i++) {
    if (lengths[i] != 0) {
      lengths[i] = lengths[i] - shortcut;
      count++;
    }
  }

  lengths.push(count);

  return lengths;
}
*/

//2
// input array with may have dup number, sort like [1,2,3],[4,4],[6,6,6],[5,5,5,5]
function canYouSort(nums) {}
//3
//blanced {}[]() judge yes or no

// solu2
function braces(values) {
  var feeback = [];

  for (var i = 1; i < values.length; i++) {
    feeback.push(checkTheString(values[i]));
  }

  return feeback;
}

function checkTheString(thevalue) {
  var store_array = [];
  var str_array = [...thevalue];
  var flag = '';

  for (var i = 0; i < str_array.length; i++) {
    console.log(str_array[i]);

    for (var j = 0; j < store_array.length; j++) {
      if (store_array[j] == str_array[i]) {
        console.log(store_array);
        store_array.splice(j, 1);
        flag = str_array[i];
        // console.log(store_array);
      }
    }

    if (flag.length > 0) {
      flag = '';
    } else {
      store_array.push(mapping(str_array[i]));
    }
  }

  if (store_array.length > 0) {
    return 'No';
  } else {
    return 'Yes';
  }
}

function mapping(str) {
  var value = '';
  switch (str) {
    case '{':
      value = '}';
      break;
    case '[':
      value = ']';
      break;
    case '(':
      value = ')';
      break;
  }

  return value;
}

//4
function priceCheck(products, productPrices, productSold, soldPrice) {
  // Write your code here
  var count = 0;
  for (var i = 0; i < productSold.length; i++) {
    for (var j = 0; j < products.length; j++) {
      if (productSold[i] === products[j]) {
        if (soldPrice[i] !== productPrices[j]) {
          count++;
        }
      }
    }
  }
  return count;
}

//5
function triangleOrNot(a, b, c) {
  var rs = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] + b[i] > c[i] && a[i] + c[i] > b[i] && c[i] + b[i] > a[i]) {
      rs.push('Yes');
    } else {
      rs.push('No');
    }
  }
  return rs;
}

//6
// two sum but need remove dup pairs
function countPairs(arr, k) {
  // Write your code here
  var ans = [];
  var rs = [];
  var i, j;
  for (i = 0; i < arr.length; i++) {
    j = rs[k - arr[i]];
    if (j !== undefined) {
      if (arr[i] > k - arr[i]) {
        ans.push([k - arr[i], arr[i]].join(' '));
      } else {
        ans.push([arr[i], k - arr[i]].join(' '));
      }
    }
    rs[arr[i]] = i;
  }
  var rmDup = arrd => [...new Set(arrd)];
  return rmDup(ans).length;
}

//7
// count how many number in nums less than maxes[i]
// but try to solve in < n*n big O time @@@
function counts(nums, maxes) {
  var arr = new Array(maxes.length);
  arr.fill(0);
  for (var i = 0; i < maxes.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[j] <= maxes[i]) {
        arr[i]++;
      }
    }
  }
  return arr;
}
