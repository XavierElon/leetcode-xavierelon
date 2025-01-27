class Solution:
    def totalNQueens(self, n: int) -> int:
        self.res = 0
        self.dfs(0, set(), set(), set(), n)
        return self.res

    def dfs(self, r: int, diagonals_set: Set[int], anti_diagonals_set: Set[int], cols_set: Set[int], n: int) -> None:
        if r == n:
            self.res += 1
            return
        
        for c in range(n):
            current_diagonal = r - c
            current_anti_diagonal = r + c

            if (c in cols_set or current_diagonal in diagonals_set or current_anti_diagonal in anti_diagonals_set):
                continue

            cols_set.add(c)
            diagonals_set.add(current_diagonal)
            anti_diagonals_set.add(current_anti_diagonal)
            self.dfs(r + 1, diagonals_set, anti_diagonals_set, cols_set, n)
            cols_set.remove(c)
            diagonals_set.remove(current_diagonal)
            anti_diagonals_set.remove(current_anti_diagonal)