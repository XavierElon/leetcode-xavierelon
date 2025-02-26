class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        sums = list(accumulate(nums, initial=0)) # get prefix sums

        # sum of subarray is right prefix sum - left prefix sum
        #   left = prev sum, right = prev sum + subarray sum, right - left = subarray sum
        
        # largest absolute sum = largest difference between left and right
        #   order doens't matter since absolute
        return max(sums) - min(sums)