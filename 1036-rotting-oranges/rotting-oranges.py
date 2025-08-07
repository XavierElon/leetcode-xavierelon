class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        dirs = [(-1,0),(1,0),(0,-1),(0,1)]

        queue = deque()
        ones = seconds = 0

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 1:
                    ones += 1
                elif grid[r][c] == 2:
                    queue.append((r, c))

        while queue and ones > 0:
            seconds += 1

            for _ in range(len(queue)):
                r, c = queue.popleft()

                for dr, dc in dirs:
                    new_r, new_c = dr + r, c + dc

                    if self.is_within_bounds(new_r, new_c, grid) and grid[new_r][new_c] == 1:
                        grid[new_r][new_c] = 2
                        ones -= 1
                        queue.append((new_r, new_c))

        return seconds if ones == 0 else -1
    
    def is_within_bounds(self, r, c, grid):
        return 0 <= r and r < len(grid) and 0 <= c and c < len(grid[0])