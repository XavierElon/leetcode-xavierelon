/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length
    const dp = new Array(n).fill(false)
    dp[n-1] = true

    for (let i = n - 2; i >= 0; i--) {
        const furthestJump = Math.min(i + nums[i], n - 1)

        for (let j = i + 1; j <= furthestJump; j++) {
            if (dp[j]) {
                dp[i] = true
                break
            }
        }
    }
    return dp[0]
};