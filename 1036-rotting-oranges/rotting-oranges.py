class Solution:
    def orangesRotting(self, matrix: List[List[int]]) -> int:
        dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        queue = deque()
        ones = seconds = 0

        for r in range(len(matrix)):
            for c in range(len(matrix[0])):
                if matrix[r][c] == 1:
                    ones += 1
                elif matrix[r][c] == 2:
                    queue.append((r, c))

        while queue and ones > 0:
            seconds += 1

            for _ in range(len(queue)):
                r, c = queue.popleft()

                for dr, dc in dirs:
                    new_r, new_c = r + dr, c + dc

                    if self.is_within_bounds(new_r, new_c, matrix) and matrix[new_r][new_c] == 1:
                        matrix[new_r][new_c] = 2
                        ones -= 1
                        queue.append((new_r, new_c))

        return seconds if ones == 0 else -1
    
    def is_within_bounds(self, r, c, matrix):
        return 0 <= r < len(matrix) and 0 <= c < len(matrix[0])