class Solution:
    def combinationSum2(self, nums: List[int], target: int) -> List[List[int]]:
        def backtrack(start: int, current: List[int], remaining: int) -> None:
            if remaining == 0:
                res.append(current.copy())

            if remaining < 0:
                return

            for i in range(start, len(nums)):
                if i > start and nums[i] == nums[i - 1]:
                    continue

                current.append(nums[i])
                backtrack(i + 1, current, remaining-nums[i])
                current.pop()

        nums.sort()
        res = []
        backtrack(0, [], target)
        return res