/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length
    const dp = new Array(n).fill(Infinity)
    dp[n-1] = 0

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] === 0) continue
        let furthestJump = Math.min(i + nums[i], n - 1)

        for (let j = i + 1; j <= furthestJump; j++) {
            if (dp[j] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[j] + 1)
            }
        }
    }

    return dp[0] === Infinity ? -1 : dp[0]
};