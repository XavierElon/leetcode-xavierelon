class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        lower_bound = self.lower_bound_bs(nums, target)
        upper_bound = self.upper_bound_bs(nums, target)

        return [lower_bound, upper_bound]

    def lower_bound_bs(self, nums, target) -> bool:
        left, right = 0, len(nums) - 1

        while left < right:
            mid = (left + right) // 2
            if nums[mid] > target:
                right = mid -1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        return right if nums and nums[right] == target else -1

    def upper_bound_bs(self, nums, target) -> bool:
        left, right = 0, len(nums) - 1

        while left < right:
            mid = (left + right) // 2 + 1
            if nums[mid] > target:
                right = mid - 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                left = mid
        return right if nums and nums[right] == target else -1