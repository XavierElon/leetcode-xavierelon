class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:           
        if image[sr][sc] == color:
            return image
        
        original_color = image[sr][sc]
        directions = [[-1,0],[1,0],[0,-1],[0,1]]
        rows, cols = len(image), len(image[0])

        queue = deque([(sr, sc)])
        image[sr][sc] = color

        while queue:
            row, col = queue.popleft()
            image[row][col] = color
            for dr, dc in directions:
                new_r, new_c = row + dr, col + dc
                if self.is_within_bounds(new_r, new_c, rows, cols) and image[new_r][new_c] == original_color:
                    # image[new_r][new_c] = color
                    queue.append((new_r, new_c))

        return image

    def is_within_bounds(self, r, c, rows, cols):
        return 0 <= r < rows and 0 <= c < cols
        