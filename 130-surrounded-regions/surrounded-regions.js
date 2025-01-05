/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || board.length === 0) return

    const rows = board.length
    const cols = board[0].length

    for (let col = 0; col < cols; col++) {
        markUncapturable(0, col)
        markUncapturable(rows - 1, col)
    }

    for (let row = 0; row < rows; row++) {
        markUncapturable(row, 0)
        markUncapturable(row, cols - 1)
    }

    function markUncapturable(row, col) {
        if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== 'O') {
            return
        }

        board[row][col] = '*'

        markUncapturable(row+1, col)
        markUncapturable(row-1, col)
        markUncapturable(row, col+1)
        markUncapturable(row, col-1)
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === 'O') {
                board[row][col] = 'X'
            } else if (board[row][col] === '*') {
                board[row][col] = 'O'
            }
        }
    }
};

