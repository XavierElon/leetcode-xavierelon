class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        lower = self.lower(nums, target)
        upper = self.upper(nums, target)

        return [lower, upper]

    def upper(self, nums, target):
        l, r = 0, len(nums) - 1
        res = -1

        while l <= r:
            mid = (l + r) // 2

            if nums[mid] == target:
                res = mid
                l = mid + 1
            elif nums[mid] < target:
                l = mid + 1
            else:
                r = mid - 1

        return res

    def lower(self, nums, target):
        l, r = 0, len(nums) - 1
        res = -1

        while l <= r:
            mid = (l + r) // 2

            if nums[mid] == target:
                res = mid
                r = mid -1
            elif nums[mid] > target:
                r = mid - 1
            else:
                l = mid + 1

        return res