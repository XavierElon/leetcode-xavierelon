class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        n = len(nums)
        if n == 1:
            return nums[0]

        prev_house = nums[0]
        curr_house = max(nums[0], nums[1])
        max_profit = 0

        for i in range(2, n):
            max_profit = max(curr_house, nums[i] + prev_house)
            prev_house = curr_house
            curr_house = max_profit

        return curr_house