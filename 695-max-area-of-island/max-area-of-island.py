class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        directions = [(-1,0),(1,0),(0,-1),(0,1)]
        visited = set()

        def dfs(r, c):
            if r < 0 or r >= rows or c < 0 or c >= cols or (r,c) in visited or grid[r][c] == 0:
                return 0

            visited.add((r,c))
            area = 1

            for dr, dc in directions:
                area += dfs(r + dr, c + dc)

            return area
        
        max_area = 0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    max_area = max(max_area, dfs(r, c))

        return max_area