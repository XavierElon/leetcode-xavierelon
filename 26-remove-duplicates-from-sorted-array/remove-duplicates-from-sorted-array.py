class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        unique_count = 1

        for i in range(1, len(nums)):
            if nums[i] != nums[i-1]:
                nums[unique_count] = nums[i]
                unique_count += 1

        return unique_count