class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        prev_row = [1] * n

        for r in range(1, m):
            current_row = [1] * n
            for c in range(1, n):
                current_row[c] = prev_row[c] + current_row[c-1]

            prev_row = current_row

        return prev_row[n-1]