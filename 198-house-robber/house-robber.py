class Solution:
    def rob(self, nums: List[int]) -> int:
        one_step_back, two_steps_back = 0, 0

        for num in nums:
            temp = max(num + two_steps_back, one_step_back)
            two_steps_back = one_step_back
            one_step_back = temp
        return one_step_back