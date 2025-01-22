from typing import List  # Correct import for List
from collections import deque  # Not used in DFS but useful if needed

class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        if not matrix or not matrix[0]:  # Handle empty matrix or empty rows
            return 0

        res = 0
        m, n = len(matrix), len(matrix[0])
        memo = [[0] * n for _ in range(m)]  # Correct initialization

        for r in range(m):
            for c in range(n):
                res = max(res, self.dfs(r, c, matrix, memo))  # Use self.dfs
        return res

    def dfs(self, r: int, c: int, matrix: List[List[int]], memo: List[List[int]]) -> int:
        if memo[r][c] != 0:
            return memo[r][c]
        
        max_path = 1
        dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # Directions: up, down, left, right

        for d in dirs:
            next_row, next_col = r + d[0], c + d[1]
            if self.is_within_bounds(next_row, next_col, matrix) and matrix[next_row][next_col] > matrix[r][c]:
                path_length = 1 + self.dfs(next_row, next_col, matrix, memo)
                max_path = max(max_path, path_length)
        
        memo[r][c] = max_path
        return max_path

    def is_within_bounds(self, r: int, c: int, matrix: List[List[int]]) -> bool:
        """Check if the given coordinates are within the matrix bounds."""
        return 0 <= r < len(matrix) and 0 <= c < len(matrix[0])