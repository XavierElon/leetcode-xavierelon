class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        def backtrack(start: int, current: List[int]) -> None:
            res.append(current.copy())

            for i in range(start, len(nums)):
                if i > start and nums[i] == nums[i-1]:
                    continue

                current.append(nums[i])
                backtrack(i + 1, current)
                current.pop()

        res = []
        nums.sort()
        backtrack(0, [])
        return res