class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix or not matrix[0]:
            return False

        rows: int = len(matrix)
        cols: int = len(matrix[0])

        left: int = 0
        right: int = rows * cols - 1

        while left <= right:
            mid: int = (left + right) // 2
            row: int = mid // cols
            col: int = mid % cols
            mid_element: int = matrix[row][col]

            if mid_element == target:
                return True
            elif mid_element < target:
                left = mid + 1
            else:
                right = mid - 1
        return False