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

            ans = max(rob_from(i + 1), rob_from(i + 2) + nums[i])

            memo[i] = ans
            return ans

        return rob_from(0)