var search = function(nums, target) {
  return helper(nums, 0, nums.length - 1, target);
};

var helper = (nums, l, r, target) => {
  let mid = Math.floor((l + r) / 2);
  if (l === r) {
    if (nums[0] !== target) return -1;
    else return mid;
  }

  // console.log(i, nums.length);
  if (nums[mid] === target) {
    return mid;
  } else if (nums.length === 1) {
    return -1;
  } else if (nums[mid] > target) {
    r = mid;
    helper(nums, l, r, target);
  } else if (nums[mid] < target) {
    l = mid;
    helper(nums, l, r, target);
  }
};

var nums = [-1, 0, 3, 5, 9, 12];
var target = 9;
console.log(search(nums, target));
