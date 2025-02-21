class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        if len(nums) == 1:
            return nums[0]

        two_steps_ago, one_step_ago = 0, 0

        for num in nums:
            temp = max(num + two_steps_ago, one_step_ago)
            two_steps_ago = one_step_ago
            one_step_ago = temp
        return one_step_ago