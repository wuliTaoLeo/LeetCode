/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums1 = [1,1,2,2,3,4,4,7,8];
let nums = [5,7,7,8,8,10],
  target = 8;
let searchRange = function(nums, target) {
  let len = nums.length,
    res = [-1, -1];
  for (let i = 0, j = len-1; i <= j;) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] < target) { // 先判断小于target的情况
      i = mid + 1;
    }else {
      j = mid - 1; // 应对刚好i = mid + 1后就指向了target值
      if (nums[mid] === target) {
        res[0] = mid; // 得到起始index
      }
    }
  }
 
  for (let i = 0, j = len-1; i <= j;) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] > target) {// 先判断大于target的情况
      j = mid - 1;
    }else {
      i = mid + 1; // 应对刚好i = mid + 1后就指向了target值
      if (nums[mid] === target) {
        res[1] = mid; // 得到结束index
      }
    }
  }
 
  return res;
};
console.log(searchRange(nums,target)); // [3, 4]
