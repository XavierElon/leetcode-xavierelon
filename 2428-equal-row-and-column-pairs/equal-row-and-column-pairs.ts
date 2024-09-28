function equalPairs(grid: number[][]): number {
    const n = grid.length
    const rowMap: { [key: string]: number } = {}

    for (let i = 0; i < n; i++) {
        const serializedRow = grid[i].join('#')
        rowMap[serializedRow] = (rowMap[serializedRow] || 0) + 1
    }

    let result = 0

    for (let j = 0; j < n; j++) {
        const column: number[] = []

        for (let i = 0; i < n; i++) {
            column.push(grid[i][j])
        }
        const serializedColumn = column.join('#')

        if (rowMap[serializedColumn]) {
            result += rowMap[serializedColumn]
        }
    }

    return result
};