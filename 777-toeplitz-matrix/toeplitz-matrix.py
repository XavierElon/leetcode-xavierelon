class Solution:
    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:
        for i in range(len(matrix) - 2, -1, -1):
            for j in range(len(matrix[0]) - 2, -1, -1):
                if matrix[i][j] != matrix[i+1][j+1]:
                    return False

        return True