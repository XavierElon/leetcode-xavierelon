class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(start: int, current: List[int], remaining: int) -> None:
            if remaining == 0:
                res.append(current.copy())
                return

            if remaining < 0:
                return

            for i in range(start, len(candidates)):
                if i > start and candidates[i] == candidates[i-1]:
                    continue

                current.append(candidates[i])
                backtrack(i + 1, current, remaining - candidates[i])
                current.pop()

        res = []
        candidates.sort()
        backtrack(0, [], target)
        return res