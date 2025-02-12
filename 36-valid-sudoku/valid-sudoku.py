class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row_arr = [set() for _ in range(9)]
        col_arr = [set() for _ in range(9)]
        box_arr = [[set() for _ in range(3)] for _ in range(3)]

        for row in range(9):
            for col in range(9):
                if board[row][col] != '.':
                    num = board[row][col]

                    if num in row_arr[row] or num in col_arr[col] or num in box_arr[row//3][col//3]:
                        return False

                    row_arr[row].add(num)
                    col_arr[col].add(num)
                    box_arr[row//3][col//3].add(num)

        return True