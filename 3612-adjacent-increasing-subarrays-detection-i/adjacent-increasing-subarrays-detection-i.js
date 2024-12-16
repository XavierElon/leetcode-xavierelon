/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    const n = nums.length;
    const increasing2right = new Array(n).fill(1);

    for (let i = n-2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            increasing2right[i] = increasing2right[i+1] + 1;
        }
    }

    for (let i = 0; i < n - k; i++) {
        if (increasing2right[i] >= k && increasing2right[i+k] >= k) {
            return true;
        }
    }

    return false;
};