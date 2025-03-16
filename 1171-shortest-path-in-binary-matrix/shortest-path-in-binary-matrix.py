class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])

            # Check if start or end is blocked
        if grid[0][0] == 1 or grid[n-1][m-1] == 1:
            return -1

        directions = [
        (-1, -1), (-1, 0), (-1, 1),
        (0, -1),           (0, 1),
        (1, -1),  (1, 0),  (1, 1)]

        grid[0][0] = 1

        queue = deque([(0, 0, 1)])

        while queue:
            row, col, steps = queue.popleft()

            if row == n - 1 and col == m - 1:
                return steps

            for dr, dc in directions:
                new_row = row + dr
                new_col = col + dc

                if new_row < 0 or new_row >= n:
                    continue

                if new_col < 0 or new_col >= m:
                    continue

                if grid[new_row][new_col] == 1:
                    continue

                grid[new_row][new_col] = 1

                queue.append((new_row, new_col, steps + 1))

        return -1

