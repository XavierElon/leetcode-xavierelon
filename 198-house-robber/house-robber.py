class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0

        memo = {}

        def rob_from(i):
            if i >= len(nums):
                return 0
            if i in memo:
                return memo[i]

            memo[i] = max(rob_from(i + 1), rob_from(i + 2) + nums[i])
            return memo[i]

        return rob_from(0)