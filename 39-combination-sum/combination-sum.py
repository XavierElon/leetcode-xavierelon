class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(start: int, current: List[int], remaining: int) -> None:
            if remaining == 0:
                res.append(current.copy())
                return

            if remaining < 0:
                return

            for i in range(start, len(candidates)):
                current.append(candidates[i])
                backtrack(i, current, remaining - candidates[i])
                current.pop()

        res = []
        backtrack(0, [], target)
        return res