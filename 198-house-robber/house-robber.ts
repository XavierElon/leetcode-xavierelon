function rob(nums: number[]): number {
    const dp: number[] = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
    }
    return dp[nums.length-1]
};