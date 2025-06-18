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
        

    def dfs(self, r, c, matrix):
        matrix[r][c] = '0'
        dirs = [(-1,0),(1,0),(0,-1),(0,1)]

        for dr, dc in dirs:
            new_r, new_c = r + dr, c + dc
            
            if (self.is_within_bounds(new_r, new_c, matrix) and matrix[new_r][new_c] == '1'):
                self.dfs(new_r, new_c, matrix)

    def is_within_bounds(self, r, c, matrix):
        return 0 <= r < len(matrix) and 0 <= c < len(matrix[0])
