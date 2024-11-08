class TicTacToe {
    rows: number[];
    cols: number[];
    diagonal: number;
    antiDiagonal: number;

    constructor(n: number) {
        this.rows = Array(n).fill(0);
        this.cols = Array(n).fill(0);
        this.diagonal = 0;
        this.antiDiagonal = 0;
    }

    move(row: number, col: number, player: number): number {
        const currentPlayer = player === 1 ? 1 : -1;
        // update currentPlayer in rows an cols array
        this.rows[row] += currentPlayer;
        this.cols[col] += currentPlayer;

        if (row === col) {
            this.diagonal += currentPlayer;
        }

        if (col === (this.cols.length - row - 1)) {
            this.antiDiagonal += currentPlayer;
        }

        const n = this.rows.length;

        // check if current player wins
        if(Math.abs(this.rows[row]) === n  || 
            Math.abs(this.cols[col]) === n ||
            Math.abs(this.diagonal) === n  ||
            Math.abs(this.antiDiagonal) === n
            ) {
                return player;
            }

            // no one wins
            return 0;
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */