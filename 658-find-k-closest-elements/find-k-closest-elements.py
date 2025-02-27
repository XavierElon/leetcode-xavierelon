class Solution:
    def findClosestElements(self, nums: List[int], k: int, target: int) -> List[int]:
        left, right = 0, len(nums) - k

        while left < right:
            mid = left + (right - left) // 2
            if target - nums[mid] > nums[mid + k] - target:
                left = mid + 1
            else:
                right = mid
        return nums[left:left + k]

        