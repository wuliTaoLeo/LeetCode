/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let arr1 = [1,1,2,2,3,4,4,7,8];
let arr = [5,7,7,8,8,10],
  target = 8;
var nextPermutation = function(nums) {
  let len = arr.length,
  res = [-1, -1];
  for (let i = 0, j = len-1; i <= j;) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] < target) { // 先判断小于target的情况
      i = mid + 1;
    }else {
      j = mid - 1; // 应对刚好i = mid + 1后就指向了target值
      if (arr[mid] === target) {
        res[0] = mid; // 得到起始index
      }
    }
  }

  for (let i = 0, j = len-1; i <= j;) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] > target) {// 先判断大于target的情况
      j = mid - 1;
    }else {
      i = mid + 1; // 应对刚好i = mid + 1后就指向了target值
      if (arr[mid] === target) {
        res[1] = mid; // 得到结束index
      }
    }
  }

  return res;

};
console.log(nextPermutation(arr,target)); // [3, 4]