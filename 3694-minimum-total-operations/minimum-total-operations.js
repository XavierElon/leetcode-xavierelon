/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let ans = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] !== nums[i + 1]) ans++;
  }

  return ans;
};