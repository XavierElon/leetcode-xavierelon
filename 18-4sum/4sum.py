class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        return self.kSum(nums, target, 4, 0)

    def kSum(self, nums: List[int], target: int, k: int, start: int) -> List[List[int]]:
        res = []
        # Early termination: if the smallest or largest k numbers can't sum to target
        if start == len(nums):
            return res
        avg = target / k
        if nums[start] > avg or nums[-1] < avg:
            return res

        if k == 2:
            return self.twoSum(nums, target, start)

        for i in range(start, len(nums)):
            if i == start or nums[i] != nums[i-1]:
                for subset in self.kSum(nums, target - nums[i], k - 1, i + 1):
                    res.append([nums[i]] + subset)
        return res

    def twoSum(self, nums: List[int], target: int, start: int) -> List[List[int]]:
        res = []
        lo, hi = start, len(nums) - 1
        while lo < hi:
            s = nums[lo] + nums[hi]
            if s < target or (lo > start and nums[lo] == nums[lo-1]):
                lo += 1
            elif s > target or (hi < len(nums)-1 and nums[hi] == nums[hi+1]):
                hi -= 1
            else:
                res.append([nums[lo], nums[hi]])
                lo += 1
                hi -= 1
        return res