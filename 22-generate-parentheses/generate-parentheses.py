class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        def backtrack(current, open, close) -> None:
            if len(current) == n * 2:
                res.append(current)
                return

            if open < n:
                backtrack(current + '(', open + 1, close)

            if close < open:
                backtrack(current + ')', open, close + 1)

        res = []
        backtrack('', 0, 0)
        return res