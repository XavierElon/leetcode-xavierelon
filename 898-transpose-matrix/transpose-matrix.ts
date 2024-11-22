function transpose(matrix: number[][]): number[][] {
    const m = matrix.length
    const n = matrix[0].length
    const transposed: number[][] = []

    for (let i = 0; i < n; i++) {
        transposed[i] = []
        for (let j = 0; j < m; j++) {
            transposed[i][j] = matrix[j][i]
        }
    }
    
    return transposed
};