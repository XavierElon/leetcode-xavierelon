class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # Step 1: Find the first number from right that's bigger than the next number
        valley = -1
        for i in range(len(nums) - 2, -1, -1):
            num = nums[i]
            num_after = nums[i + 1]
            
            if num < num_after:
                valley = i
                break
        
        # If no valley found, reverse the entire array
        if valley == -1:
            nums.reverse()
            return
        
        # Find the number just larger than nums[valley]
        next_higher = len(nums) - 1
        while nums[next_higher] <= nums[valley]:
            next_higher -= 1
        
        # Swap the valley element with next_higher
        nums[valley], nums[next_higher] = nums[next_higher], nums[valley]
        
        # Reverse the subarray after valley
        left = valley + 1
        right = len(nums) - 1
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1