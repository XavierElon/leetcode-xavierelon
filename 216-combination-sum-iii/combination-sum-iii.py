class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res = []

        def backtrack(remain, combination, next_start):
            if remain == 0 and len(combination) == k:
                res.append(list(combination))
                return
            elif remain < 0 or len(combination) == k:
                return

            for i in range(next_start, 9):
                combination.append(i + 1)
                backtrack(remain - i - 1, combination, i + 1)
                combination.pop()

        backtrack(n, [], 0)
        return res