class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        memo = {}

        def dfs(r: int, c: int) -> int:
            if r == 0 or c == 0:
                return 1

            if r < 0 or c < 0:
                return 0

            if (r, c) in memo:
                return memo[(r, c)]

            memo[(r, c)] = dfs(r-1, c) + dfs(r, c-1)
            return memo[(r, c)]

        return dfs(m-1, n-1)