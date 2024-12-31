/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(0)

    dp[0] = nums[0]
    let maxSubarray = dp[0]

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
        maxSubarray = Math.max(dp[i], maxSubarray)
    }

    return maxSubarray
};