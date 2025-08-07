class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if len(grid) == 0:
            return 0

        count = 0

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == '1':
                    self.dfs(r, c, grid)
                    count += 1

        return count
        
    def dfs(self, r, c, grid):
        grid[r][c] = '0'
        dirs = [(-1,0),(1,0),(0,-1),(0,1)]

        for dr, dc in dirs:
            new_r, new_c = r + dr, c + dc

            if (self.is_within_bounds(new_r, new_c, grid) and grid[new_r][new_c] == '1'):
                self.dfs(new_r, new_c, grid)

    def is_within_bounds(self, r, c, grid):
        return 0 <= r and r < len(grid) and 0 <= c and c < len(grid[0])