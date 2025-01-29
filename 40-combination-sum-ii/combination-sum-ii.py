class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
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
            if i > start and candidates[i] == candidates[i-1]:
                continue

            if candidates[i] > target:
                break

            curr_candidate.append(candidates[i])

            self.backtrack(i+1, curr_candidate, candidates, target-candidates[i], res)
             
            curr_candidate.pop()

