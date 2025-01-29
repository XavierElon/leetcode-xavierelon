class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        self.backtrack('', 0, 0 , n, res)
        return res

    def backtrack(self, current: str, open: int, close: int, n: int, res: List[str]) -> None:
        if len(current) / 2 == n:
            res.append(current)
            return

        if open < n:
            self.backtrack(current + '(', open + 1, close, n, res)

        if close < open:
            self.backtrack(current + ')', open, close + 1, n, res)
