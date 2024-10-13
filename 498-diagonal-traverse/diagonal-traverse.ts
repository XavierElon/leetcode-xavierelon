function findDiagonalOrder(mat: number[][]): number[] {
    if (mat.length === 0) return []
    const rows: number = mat.length
    const cols: number = mat[0].length
    const diagonals: Map<number, number[]> = new Map()

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const key = i + j
            if (!diagonals.has(key)) {
                diagonals.set(key, [])
            }
            diagonals.get(key).push(mat[i][j])
        }
    }

    const result: number[] = []

    for (let k = 0; k <= rows + cols - 2; k++) {
        if (diagonals.has(k)) {
            const diagonal = diagonals.get(k)

            if (k % 2 === 0) {
                result.push(...diagonal.reverse())
            } else {
                result.push(...diagonal)
            }
        }
    }

    return result
};