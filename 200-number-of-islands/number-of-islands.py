class Solution:
    def numIslands(self, matrix: List[List[str]]) -> int:
        if not matrix:
            return 0

        count = 0
        for r in range(len(matrix)):
            for c in range(len(matrix[0])):
                if matrix[r][c] == '1':
                    self.dfs(r, c, matrix)
                    count += 1

        return count
    
    def dfs(self, r: int, c: int, matrix: List[List[str]]) -> None:
        matrix[r][c] = '-1'

        dirs = [(-1, 0), (1, 0), (0, 1), (0, -1)] 

        for d in dirs:
            next_r, next_c = r + d[0], c + d[1]

            if (self.is_within_bounds(next_r, next_c, matrix) and matrix[next_r][next_c] == '1'):
                self.dfs(next_r, next_c, matrix)
    

    def is_within_bounds(self, r: int, c: int, matrix: List[List[str]]) -> bool:
        return 0 <= r < len(matrix) and 0 <= c < len(matrix[0])