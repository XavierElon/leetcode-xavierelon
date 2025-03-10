class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        lower = self.lower(nums, target, True)
        upper = self.lower(nums, target, False)

        return [lower, upper]

    def lower(self, nums, target, is_lower):
        left, right = 0, len(nums) - 1
        result = -1

        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                result = mid
                if is_lower:
                    right = mid - 1
                else:
                    left = mid + 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        
        return result
