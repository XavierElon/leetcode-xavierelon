class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        n = len(nums)
        left = 0
        max_ones = 0
        count = 0

        for right in range(n):
            if nums[right] == 1:
                count += 1
                max_ones = max(max_ones, count)
            else:
                count = 0
                left = right + 1
                
            right += 1

        return max_ones