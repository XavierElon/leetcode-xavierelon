function findDiagonalOrder(mat: number[][]): number[] {
    if (mat.length === 0) return []
    const m: number = mat.length
    const n: number = mat[0].length
    const result: number[] = []
    const diagonals: number[][] = Array.from({ length: m + n - 1 }, () => [])

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const key: number = i + j
            diagonals[key].push(mat[i][j])
        }
    }

    for (let k = 0; k < diagonals.length; k++) {
        const diagonal: number[] = diagonals[k]
        if (k % 2 === 0) {
            for (let p = diagonal.length - 1; p >= 0; p--) {
                result.push(diagonal[p])
            }
        } else {
            for (let p = 0; p < diagonal.length; p++) {
                result.push(diagonal[p])
            }
        }
    }

    return result
};