class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        lower_bound = self.lower_bound(nums, target)
        upper_bound = self.upper_bound(nums, target)

        return [lower_bound, upper_bound]

    def lower_bound(self, nums, target):
        left, right = 0, len(nums) - 1

        while left < right:
            mid = (left + right) // 2
            if nums[mid] > target:
                right = mid - 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid

        return left if nums and nums[left] == target else -1


    def upper_bound(self, nums, target):
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


'''
[5,8,8,8,8,8,10]
 L     M       R
mid = 1
n = 7
'''
