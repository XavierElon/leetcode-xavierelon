/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
        let count = 0;
    const cols = new Set();          // Columns where queens are placed
    const diagonals = new Set();     // Diagonals (row - col)
    const antiDiagonals = new Set(); // Anti-diagonals (row + col)

    /**
     * Backtracking function to place queens row by row
     * @param {number} row - Current row to place a queen
     */
    function backtrack(row) {
        // Base case: All queens are placed
        if (row === n) {
            count++;
            return;
        }

        // Iterate through each column in the current row
        for (let col = 0; col < n; col++) {
            // Calculate diagonal and anti-diagonal indices
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

            // Move to the next row
            backtrack(row + 1);

            // Remove the queen and backtrack
            cols.delete(col);
            diagonals.delete(diag);
            antiDiagonals.delete(antiDiag);
        }
    }

    // Start the backtracking from the first row
    backtrack(0);

    return count;
};