/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if (source === destination) return true
    const graph = new Array(n).fill(null).map(() => [])
    for (let [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }

    const visited = new Set()

    function dfs(node) {
        if (node === destination) return true

        visited.add(node)

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) return true
            }
        }
        return false
    }

    return dfs(source)
};