/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const memo = {}

    const dp = (i) => {
        if (i === 0) return nums[0]

        if (i in memo) return memo[i]

        memo[i] = Math.max(nums[i], dp(i-1) + nums[i])
        return memo[i]
    }

    let maxSubarray = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const current = dp(i)
        maxSubarray = Math.max(maxSubarray, current)
    }

    return maxSubarray
};