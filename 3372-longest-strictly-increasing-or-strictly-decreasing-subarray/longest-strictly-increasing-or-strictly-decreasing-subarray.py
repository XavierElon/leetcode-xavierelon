class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        increasing_seq = decreasing_seq = 1
        max_len = 1

        for i in range(1, len(nums)):
            if nums[i-1] < nums[i]:
                increasing_seq += 1
                decreasing_seq = 1
            elif nums[i-1] > nums[i]:
                decreasing_seq += 1
                increasing_seq = 1
            else:
                increasing_seq = decreasing_seq = 1

            max_len = max(max_len, increasing_seq, decreasing_seq)
        return max_len
                