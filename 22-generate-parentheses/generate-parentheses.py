class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        def backtrack(current, open, close):
            if len(current) == n * 2:
                res.append("".join(current))
                return

            if open < n:
                current.append('(')
                backtrack(current, open + 1, close)
                current.pop()

            if close < open:
                current.append(')')
                backtrack(current, open, close + 1)
                current.pop()

        res = []
        backtrack([], 0, 0)
        return res