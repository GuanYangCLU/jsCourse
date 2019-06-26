function waitingTime(tickets, p) {
  // Write your code here
  let dic = {};
  let unit = 0;
  let arr = [...tickets];
  let val_p = arr[p];
  let arrs = tickets.sort();
  arrs.splice(arrs.indexOf(val_p));
  let dup = 1;
  let curlen = arr.length;
  for (let i = 0; i < arrs.length; i++) {
    if (i === 0) {
      dic[arrs[i]] = curlen;
      // arrs.shift()
    } else if (arrs[i] === arrs[i - 1]) {
      dup++;
    } else if (arrs[i] > arrs[i - 1]) {
      curlen = arr.length - dup;
      dup = 1;
      dic[arrs[i] - arr[i - 1]] = curlen;
    }
  }
  for (let key in dic) {
    unit = unit + parseInt(key) * parseInt(dic[key]);
  }
  return unit + p;
}

let tickets = [2, 6, 3, 4, 5];
let p = 2;

console.log(waitingTime(tickets, p));
