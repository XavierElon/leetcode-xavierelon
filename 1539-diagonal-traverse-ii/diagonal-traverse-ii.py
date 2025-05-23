class Solution:
    def findDiagonalOrder(self, nums: List[List[int]]) -> List[int]:
        res = []
        queue = deque([(0, 0)])
        rows = len(nums)

        while queue:
            row, col = queue.popleft()
            res.append(nums[row][col])

            if col == 0 and row + 1 < rows:
                queue.append((row + 1, col))
            if col + 1 < len(nums[row]):
                queue.append((row, col + 1))

        return res