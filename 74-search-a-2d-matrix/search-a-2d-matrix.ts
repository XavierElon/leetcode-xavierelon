function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0 || matrix[0].length === 0) return false

    const rows: number = matrix.length
    const cols: number = matrix[0].length

    let left: number = 0
    let right: number = rows * cols - 1

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)
        const midElement: number = matrix[Math.floor(mid / cols)][mid % cols]

        if (midElement === target) {
            return true
        } else if (midElement < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return false
};