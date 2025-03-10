class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
        rows, cols = len(mat), len(mat[0])
        res = []

        curr_col = curr_row = 0
        going_up = True

        while len(res) != rows * cols:
            if going_up:
                while curr_row >= 0 and curr_col < cols:
                    res.append(mat[curr_row][curr_col])

                    curr_row -= 1
                    curr_col += 1

                if curr_col == cols:
                    curr_col -= 1
                    curr_row += 2
                else:
                    curr_row += 1

                going_up = False
            else:
                while curr_row < rows and curr_col >= 0:
                    res.append(mat[curr_row][curr_col])

                    curr_col -= 1
                    curr_row += 1

                if curr_row == rows:
                    curr_col += 2
                    curr_row -= 1
                else:
                    curr_col += 1

                going_up = True

        return res