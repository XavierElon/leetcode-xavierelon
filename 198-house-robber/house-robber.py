class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0

        memo = {}

        def rob_house(index):
            if index >= len(nums):
                return 0

            if index in memo:
                return memo[index]

            memo[index] = max(rob_house(index + 1), rob_house(index + 2) + nums[index])
            return memo[index]

        return rob_house(0)