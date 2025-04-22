class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        def backtrack(open_rem, close_rem, cur):
            if open_rem == 0 and close_rem == 0:
                res.append("".join(cur))
                return
            
            if open_rem > 0:
                cur.append('(')
                backtrack(open_rem - 1, close_rem, cur)
                cur.pop()
            
            if close_rem > open_rem:
                cur.append(')')
                backtrack(open_rem, close_rem - 1, cur)
                cur.pop()

        res = []
        backtrack(n, n, [])
        return res