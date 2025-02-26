class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        result = []

        while matrix:
            # Remove and add the first row
            result += matrix.pop(0)

            # Process rightmost column if it exists
            if matrix and matrix[0]:
                for row in matrix:
                    result.append(row.pop())

            # Process the bottom row in reverse (if it exists)
            if matrix:
                result += matrix.pop()[::-1]

            # Process the leftmost column from bottom to top (if it exists)
            if matrix and matrix[0]:
                for row in matrix[::-1]:
                    result.append(row.pop(0))

        return result