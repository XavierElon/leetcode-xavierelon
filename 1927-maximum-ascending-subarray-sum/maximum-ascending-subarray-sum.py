class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        n = len(nums)
        max_val = 0

        cur_val = nums[0]

        for i in range(1, n):
            if nums[i-1] < nums[i]:
                cur_val += nums[i]
            else:
                max_val = max(max_val, cur_val)
                cur_val = nums[i]

        return max(max_val, cur_val)