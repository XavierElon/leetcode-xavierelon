class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        uniqueCount = 1

        for i in range(1, len(nums)):
            if nums[i] != nums[i-1]:
                nums[uniqueCount] = nums[i]
                uniqueCount += 1

        return uniqueCount