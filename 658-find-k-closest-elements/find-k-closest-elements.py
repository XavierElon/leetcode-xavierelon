class Solution:
    def findClosestElements(self, nums: List[int], k: int, target: int) -> List[int]:
        left, right = 0, len(nums) - k

        while left < right:
            mid = (left + right) // 2
            if target - nums[mid] > nums[mid + k] - target:
                left = mid + 1
            else:
                right = mid
        return nums[left:left + k]

"""
length = 9
        0.      4.      8
nums = [1,1,2,2,2,2,2,3,3], target = 3, k = 3
                L    R     
left = 0
right = 6
mid = 3
3 - 2 > 2 - 3
"""