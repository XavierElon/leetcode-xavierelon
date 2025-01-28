class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 0:
            return 0

        dp = [0] * n
        dp[0] = nums[0]
        max_sum = dp[0]

        for i in range(1, n):
            dp[i] = max(dp[i-1] + nums[i], nums[i])
            max_sum = max(max_sum, dp[i])

        return max_sum