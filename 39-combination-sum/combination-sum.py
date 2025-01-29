class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
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
            current.append(nums[i])
            self.backtrack(i, current, nums, target - nums[i], res)
            current.pop()