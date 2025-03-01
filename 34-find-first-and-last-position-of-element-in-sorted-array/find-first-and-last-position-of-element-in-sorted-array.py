class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if not nums:
            return [-1, -1]
        if target < nums[0] or target > nums[-1]:
            return [-1, -1]
        
        # Initialize result list with two elements
        result = [0, 0]
        
        # Find leftmost occurrence
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = (right - left) // 2 + left
            
            if nums[mid] >= target:
                right = mid - 1
            else:
                left = mid + 1
        
        # If target not found
        if nums[left] != target:
            return [-1, -1]
        result[0] = left
        
        # Find rightmost occurrence
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = (right - left) // 2 + left
            
            if nums[mid] <= target:
                left = mid + 1
            else:
                right = mid - 1
        
        result[1] = right
        
        return result