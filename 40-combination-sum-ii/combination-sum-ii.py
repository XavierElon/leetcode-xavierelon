class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        res = []
        self.backtrack(0, [], candidates, target, res)
        return res

    def backtrack(self, start: int, current: List[int], nums: List[int], target: int, res: List[List[int]]) -> None:
        if target == 0:
            res.append(current.copy())
            return

        if target < 0:
            return

        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i-1]:
                continue

            current.append(nums[i])
            self.backtrack(i + 1, current, nums, target - nums[i], res)
            current.pop()