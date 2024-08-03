/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array(9).fill().map(() => new Set())
    const cols = Array(9).fill().map(() => new Set())
    const boxes = Array(9).fill().map(() => new Set())

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const num = board[i][j]
            if (num === '.') continue

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) return false

            rows[i].add(num)
            cols[j].add(num)
            boxes[boxIndex].add(num)
        }
    }
    return true
};