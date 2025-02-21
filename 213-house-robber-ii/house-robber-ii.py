class Solution:
    def rob(self, nums: List[int]) -> int:
        return max(nums[0], self.helper(nums[1:]), self.helper(nums[:-1]))
        
    
    def helper(self, nums):
        two_steps_ago, one_step_ago = 0, 0

        for num in nums:
            new_rob = max(two_steps_ago + num, one_step_ago)
            two_steps_ago = one_step_ago
            one_step_ago = new_rob

        return one_step_ago