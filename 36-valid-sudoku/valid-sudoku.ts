function isValidSudoku(board: string[][]): boolean {
const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());
const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>());

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const num = board[i][j]
            if (num === '.') continue

            const boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3)

            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) return false

            rows[i].add(num)
            cols[j].add(num)
            boxes[boxIndex].add(num)
        }
    }

    return true
};