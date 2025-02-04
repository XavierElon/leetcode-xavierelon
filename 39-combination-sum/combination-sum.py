class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(start, current: List[int], target: int) -> None:
            if target == 0:
                res.append(current.copy())
                return

            if target < 0:
                return

            for i in range(start, len(candidates)):
                current.append(candidates[i])
                backtrack(i, current, target- candidates[i])
                current.pop()

        res = []
        backtrack(0, [], target)
        return res