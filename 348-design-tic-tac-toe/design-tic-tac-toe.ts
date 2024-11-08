class TicTacToe {
    private rows: number[]
    private cols: number[]
    private diagonals: number
    private antiDiagonals: number

    constructor(n: number) {
        this.rows = new Array(n).fill(0)
        this.cols = new Array(n).fill(0)
        this.diagonals = 0
        this.antiDiagonals = 0
    }

    move(row: number, col: number, player: number): number {
        const currentPlayer: number = player === 1 ? 1 : -1

        this.rows[row] += currentPlayer
        this.cols[col] += currentPlayer

        if (row === col) this.diagonals += currentPlayer
        if (col === (this.cols.length - row - 1)) this.antiDiagonals += currentPlayer

        const n: number = this.rows.length

        if (Math.abs(this.rows[row]) === n || Math.abs(this.cols[col]) === n || Math.abs(this.diagonals) === n || Math.abs(this.antiDiagonals) === n) {
            return player
        }

        return 0
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */