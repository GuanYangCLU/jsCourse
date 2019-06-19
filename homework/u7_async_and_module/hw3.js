// JavaScript Homework #3

// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
// determine if a person could attend all meetings.
// For example,
//  Given [[0, 30],[5, 10],[15, 20]],
//  return false.
let sch = [[0, 30], [5, 10], [15, 20]];
// console.log(sch.sort());
const checkSch = sch => {
  sch.reduce(x => x.sort()); // direct sort will sort as string, will be 5 > 15
  let ans = true;
  for (let i = 0; i < sch.length - 1; i++) {
    //   console.log(sch[i][1], sch[i + 1][0], ans);
    ans = ans && sch[i][1] <= sch[i + 1][0];
  }
  return ans;
};

console.log(checkSch(sch));
