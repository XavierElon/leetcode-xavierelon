class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        rows, cols = len(image), len(image[0])
        original_color = image[sr][sc]

        if color == original_color:
            return image

        def dfs(r, c):
            if image[r][c] == original_color:
                image[r][c] = color

                if r >= 1: dfs(r-1, c)
                if r + 1  < rows: dfs(r+1, c)
                if c >= 1: dfs(r, c-1)
                if c + 1 < cols: dfs(r, c+1)
            return

        dfs(sr, sc)
        return image