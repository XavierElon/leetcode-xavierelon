class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        row = [1] * n

        for i in range(m - 1):
            new_row = [1] * n

            for j in range(1, n):
                new_row[j] = row[j] + new_row[j-1]
            
            row = new_row

        return row[-1]