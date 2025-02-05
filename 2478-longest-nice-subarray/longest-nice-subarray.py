class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        l = 0
        r = 0
        n = len(nums)
        
        curr_mask = 0
        ans = 1
        while r < n:
            while l < r and curr_mask & nums[r] != 0:
                curr_mask = curr_mask ^ nums[l]
                l += 1
            
            curr_mask = curr_mask | nums[r]
            r += 1
            ans = max(ans, r - l)
        return ans