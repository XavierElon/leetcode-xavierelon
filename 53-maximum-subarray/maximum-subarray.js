/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSubarray = nums[0]
    let maxSubarray = nums[0]

    for (let i = 1; i < nums.length; i++) {
         currentSubarray = Math.max(nums[i], currentSubarray + nums[i])
         maxSubarray = Math.max(currentSubarray, maxSubarray)
    }

    return maxSubarray
};