class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = max_length = 0
        zero_count = 0
        n = len(nums)

        for right in range(n):
            if nums[right] == 0:
                zero_count += 1
            while zero_count > k:
                if nums[left] == 0:
                    zero_count -= 1
                left += 1
            max_length = max(max_length, right - left + 1)
        
        return max_length
