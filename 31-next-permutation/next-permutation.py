class Solution:
    def nextPermutation(self, nums):
        def swap(i, j):
            nums[i], nums[j] = nums[j], nums[i]

        def reverse(start):
            end = len(nums) - 1
            while start < end:
                swap(start, end)
                start += 1
                end -= 1

        def getNextLargest(idx):
            for i in range(len(nums) - 1, idx, -1):
                if nums[i] > nums[idx]:
                    return i

        for i in range(len(nums) - 2, -1, -1):
            if nums[i] < nums[i + 1]:
                next_largest = getNextLargest(i)
                swap(i, next_largest)
                reverse(i + 1)
                return

        reverse(0)
    