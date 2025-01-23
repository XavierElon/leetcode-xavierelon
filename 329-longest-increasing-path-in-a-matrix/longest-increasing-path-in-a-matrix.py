class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        if not matrix or not matrix[0]:
            return 0

        rows, cols = len(matrix), len(matrix[0])
        matrix = matrix
        memo = [[0] * cols for _ in range(rows)]
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        max_path= 0

        for r in range(rows):
            for c in range(cols):
                current_path = self.dfs(r, c, directions, memo, matrix, rows, cols)
                max_path = max(max_path, current_path)
        return max_path

    def dfs(self, r, c, directions, memo, matrix, rows, cols):
        if memo[r][c] != 0:
            return memo[r][c]

        max_len = 1

        for dr, dc  in directions:
            nr, nc = r + dr, c + dc
            
            if (0 <= nr < rows and 0 <= nc < cols and matrix[nr][nc] > matrix[r][c]):
                length = 1 + self.dfs(nr, nc, directions, memo, matrix, rows, cols)
                max_len = max(max_len, length)

        memo[r][c] = max_len
        return max_len