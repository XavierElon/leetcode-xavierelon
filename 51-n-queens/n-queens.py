class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        self.solutions = []
        self.dfs(0, set(), set(), set(), [], n)
        return self.solutions
    
    def dfs(self, r: int, diagonals: set, anti_diagonals: set, cols: set, current_state: List[str], n: int) -> None:
        if r == n:
            self.solutions.append(current_state[:])
            return
        
        for c in range(n):
            curr_diagonal = r - c
            curr_anti_diagonal = r + c
            
            if (c in cols or 
                curr_diagonal in diagonals or 
                curr_anti_diagonal in anti_diagonals):
                continue
            
            cols.add(c)
            diagonals.add(curr_diagonal)
            anti_diagonals.add(curr_anti_diagonal)
            
            row = '.' * c + 'Q' + '.' * (n - c - 1)
            current_state.append(row)
            
            self.dfs(r + 1, diagonals, anti_diagonals, cols, current_state, n)
            
            cols.remove(c)
            diagonals.remove(curr_diagonal)
            anti_diagonals.remove(curr_anti_diagonal)
            current_state.pop()