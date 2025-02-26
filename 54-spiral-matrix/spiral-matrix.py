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

            if matrix:
                result += matrix.pop()[::-1]

            if matrix and matrix[0]:
                for row in matrix[::-1]:
                    result.append(row.pop(0))

        return result