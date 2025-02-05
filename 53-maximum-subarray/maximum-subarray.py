class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if not nums:
            return 0

        max_sum = current_sum = float('-inf')

        for num in nums:
            current_sum = max(current_sum + num, num)
            max_sum = max(max_sum, current_sum)

        return max_sum