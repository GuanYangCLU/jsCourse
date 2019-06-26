// 1
// function waitingTime(tickets, p) {
//     // Write your code here
//     let dic = {};
//     let unit = 0;
//     let arr = [...tickets];
//     let val_p = arr[p];
//     let arrs = tickets.sort();
//     arrs.splice(arrs.indexOf(val_p));
//     let dup = 1;
//     let curlen = arr.length;
//     for (let i = 0; i < arrs.length; i++) {
//       if (i === 0) {
//         dic[arrs[i]] = curlen;
//         // arrs.shift()
//       } else if (arrs[i] === arrs[i - 1]) {
//         dup++;
//       } else if (arrs[i] > arrs[i - 1]) {
//         curlen = arr.length - dup;
//         dup = 1;
//         dic[arrs[i] - arr[i - 1]] = curlen;
//       }
//     }
//     for (let key in dic) {
//       unit = unit + parseInt(key) * parseInt(dic[key]);
//     }
//     return unit + p;
//   }

//   let tickets = [2, 6, 3, 4, 5];
//   let p = 2;

//   console.log(waitingTime(tickets, p));

// 2 pass
/*
 * Complete the 'countNonUnique' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function countNonUnique(numbers) {
  // Write your code here
  let dic = {};
  let dic2 = {};
  for (let x of numbers) {
    if (!(x in dic)) {
      dic[x] = 1;
    } else {
      dic[x]++;
    }
  }
  for (let x of numbers) {
    if (dic[x] !== 1) {
      // let cx = x.toString();
      // delete dic.x;
      if (!(x in dic2)) {
        dic2[x] = 1;
      } else {
        dic2[x]++;
      }
    }
  }
  return Object.keys(dic2).length;
}

let numbers = [1, 3, 1, 4, 5, 6, 3, 2];
console.log(countNonUnique(numbers));

// 3 pass
// let a = 'sdad';
// let c = a.substring(2);
// console.log(a, c);
function mergeStrings(a, b) {
  let tail = 0;
  let arr = [];
  if (a.length > b.length) {
    tail = b.length;
    let arra = a.split('');
    let arrb = b.split('');
    let arrc = arra.splice(tail);
    for (let i = 0; i < 2 * tail; i++) {
      if (i % 2 === 0) {
        arr.push(arra[i / 2]);
      } else if (i % 2 === 1) {
        arr.push(arrb[(i - 1) / 2]);
      }
    }
    arr.push(...arrc);
  } else {
    tail = a.length;
    let arra = a.split('');
    let arrb = b.split('');
    let arrc = arrb.splice(tail);
    for (let i = 0; i < 2 * tail; i++) {
      if (i % 2 === 0) {
        arr.push(arra[i / 2]);
      } else if (i % 2 === 1) {
        arr.push(arrb[(i - 1) / 2]);
      }
    }
    arr.push(...arrc);
  }
  return arr.join('');
}
let a = 'qwerty';
let b = 'asd';
console.log(mergeStrings(a, b));

// 8
// const sudo = (a, b) => {
//   let x = a;
//   let y = b;
//   while (x !== y) {
//     if (x > y) {
//       x = x - y;
//     } else if (x < y) {
//       y = y - x;
//     }
//   }
//   return x;
// };
// let a = 2437;
// let b = 875;
// console.log(sudo(a, b));

// 9
