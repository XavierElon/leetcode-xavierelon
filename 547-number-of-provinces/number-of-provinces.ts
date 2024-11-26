function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length
    const visited: Array<boolean> = new Array(n).fill(false)
    let provinceCount = 0

    function dfs(city: number): void {
        visited[city] = true
        for (let adjacentCity = 0; adjacentCity < n; adjacentCity++) {
            if (isConnected[city][adjacentCity] === 1 && !visited[adjacentCity]) {
                dfs(adjacentCity)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provinceCount++
            dfs(i)
        }
    }

    return provinceCount
};