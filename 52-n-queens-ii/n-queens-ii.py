class Solution:
    def totalNQueens(self, n: int) -> int:
        res = 0

        def dfs(r: int, diagonals_set: Set[int], anti_diagonals_set: Set[int], cols_set: Set[int], n :int) -> None:
            nonlocal res
            if r == n:
                res += 1
                return

            for c in range(n): 
                curr_diagonal = r - c
                curr_anti_diagonal = r + c

                if (c in cols_set or curr_diagonal in diagonals_set or curr_anti_diagonal in anti_diagonals_set):
                    continue

                cols_set.add(c)
                diagonals_set.add(curr_diagonal)
                anti_diagonals_set.add(curr_anti_diagonal)

                dfs(r + 1, diagonals_set, anti_diagonals_set, cols_set, n)

                cols_set.remove(c)
                diagonals_set.remove(curr_diagonal)
                anti_diagonals_set.remove(curr_anti_diagonal)

        dfs(0, set(), set(), set(), n)
        return res