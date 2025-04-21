class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        best = 0

        for n in nums_set:
            if n - 1 not in nums_set:
                length = 1
                while n + length in nums_set:
                    length += 1
                best = max(best, length)

        return best