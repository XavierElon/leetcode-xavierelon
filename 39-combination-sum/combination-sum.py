class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        self.backtrack(0, [], candidates, target, res)
        return res

    def backtrack(self, start: int, curr_candidate: List[int], candidates: List[int], target: int, res: List[List[int]]) -> None:
        if target == 0:
            res.append(curr_candidate.copy())
            return

        if target < 0:
            return

        for i in range(start, len(candidates)):
            curr_candidate.append(candidates[i])
            self.backtrack(i, curr_candidate, candidates, target - candidates[i], res)
            curr_candidate.pop()