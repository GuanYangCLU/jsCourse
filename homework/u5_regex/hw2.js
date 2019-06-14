// 100 * 100 Euclid distance sort

// var arr = [
//   { id: 'a', value: '91,49' }, //31
//   { id: 'b', value: '44,67' },
//   { id: 'c', value: '93,6' }
// ];
var arr = require('./coordinates.json');
// Your input
var input_x = 0;
var input_y = 0;

const ids = arr.map(x => x.id);
const vals = arr.map(x => x.value);
const dsts = vals.map(x => {
  var coor = x.split(',');
  return (
    (coor[0] - input_x) * (coor[0] - input_x) +
    (coor[1] - input_y) * (coor[1] - input_y)
  );
});
const arr2 = ids.map((x, i) => [x, dsts[i]]);
// console.log(arr2);
arr2.sort((a, b) => a[1] - b[1]);
// console.log(arr2);
// console.log(JSON.stringify(arr2));
const arr3 = arr2.reduce((json, a) => {
  json[a[0]] = a[1];
  return json;
});
console.log(arr3); // 1st element?

// var arr2 = arr.map((x, y) => {
//   var key = x.id;
//   var coor = y.split(',');
//   var val = coor[0] * coor[0] + coor[1] * coor[1];
//   return { key: val };
// });
// arr.sort((r1, r2) => r1 - r2);
