class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        self.backtrack([], 0, candidates, target, res)
        return res

    def backtrack(self, combination: List[int], start_index: int, nums: List[int], target: int, res: List[List[int]]) -> None:
        if target == 0:
            res.append(combination.copy())
            return

        if target < 0:
            return

        for i in range(start_index, len(nums)):
            combination.append(nums[i])
            self.backtrack(combination, i, nums, target - nums[i], res)
            combination.pop()