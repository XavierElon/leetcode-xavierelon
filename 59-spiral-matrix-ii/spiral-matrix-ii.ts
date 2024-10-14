function generateMatrix(n: number): number[][] {
    if (n === 0) return []
    let num: number = 1
    let top: number = 0
    let bottom: number = n - 1
    let left: number = 0
    let right: number = n - 1
    const matrix: number[][] = Array.from({ length: n}, () => Array(n).fill(0))

    while (num <= n * n) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++
        }
        top++
        // Down
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++
        }
        right--

        // Left
        if (top <= bottom) {
              for (let i = right; i >= left; i--) {
                    matrix[bottom][i] = num++
                }
                bottom--
        }
      
        // Up
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++
            }
            left++
        }
        
    }
    return matrix
};