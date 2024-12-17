/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
        const results = []; // To store all valid solutions
    const cols = new Set();          // Columns where queens are placed
    const diagonals = new Set();     // Diagonals (row - col)
    const antiDiagonals = new Set(); // Anti-diagonals (row + col)
    const board = []; // Current state of the board, stores column index for each row

    /**
     * Backtracking function to place queens row by row
     * @param {number} row - Current row to place a queen
     */
    function backtrack(row) {
        // Base case: All queens are placed
        if (row === n) {
            // Convert the current board configuration to the required string format
            const boardRepresentation = board.map(col => {
                let rowStr = '';
                for (let c = 0; c < n; c++) {
                    rowStr += (c === col) ? 'Q' : '.';
                }
                return rowStr;
            });
            results.push(boardRepresentation);
            return;
        }

        // Iterate through each column in the current row
        for (let col = 0; col < n; col++) {
            const diag = row - col;
            const antiDiag = row + col;

            // Check if the current column or diagonals are under attack
            if (cols.has(col) || diagonals.has(diag) || antiDiagonals.has(antiDiag)) {
                continue; // Unsafe position, skip to next column
            }

            // Place the queen by marking the column and diagonals
            cols.add(col);
            diagonals.add(diag);
            antiDiagonals.add(antiDiag);
            board.push(col); // Record the queen's position in the current row

            // Move to the next row
            backtrack(row + 1);

            // Remove the queen and backtrack
            cols.delete(col);
            diagonals.delete(diag);
            antiDiagonals.delete(antiDiag);
            board.pop(); // Remove the queen's position from the current row
        }
    }

    // Start the backtracking from the first row
    backtrack(0);

    return results;
};