function minReorder(n: number, connections: number[][]): number {
    const adjList: Map<number, number[][]> = new Map()

    for (const [u, v] of connections) {
        if (!adjList.has(u)) adjList.set(u, [])
        if (!adjList.has(v)) adjList.set(v, [])
        adjList.get(u).push([v, 1])
        adjList.get(v).push([u, 0])
    }

    let reorders: number = 0
    const visited: boolean[] = new Array(n).fill(false)

    function dfs(city: number): void {
        visited[city] = true

        for (const [nextCity, needsReversal] of adjList.get(city)) {
            if (!visited[nextCity]) {
                reorders += needsReversal
                dfs(nextCity)
            }
        }
    }

    dfs(0)

    return reorders
};