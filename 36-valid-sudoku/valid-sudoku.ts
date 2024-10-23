function isValidSudoku(board: string[][]): boolean {
     // Ensure the board is a 9x9 grid
    if (board.length !== 9 || board.some(row => row.length !== 9)) {
        throw new Error("Invalid board size. The board must be a 9x9 grid.");
    }

    // Initialize arrays of Sets for rows, columns, and boxes
    const rows: Array<Set<string>> = Array.from({ length: 9 }, () => new Set<string>());
    const cols: Array<Set<string>> = Array.from({ length: 9 }, () => new Set<string>());
    const boxes: Array<Set<string>> = Array.from({ length: 9 }, () => new Set<string>());

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const num: string = board[i][j]
            if (num === '.') continue

            const boxIndex: number = Math.floor(i/3) * 3 + Math.floor(j/3)

            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) return false

            rows[i].add(num)
            cols[j].add(num)
            boxes[boxIndex].add(num)
        }
    }
    return true
};