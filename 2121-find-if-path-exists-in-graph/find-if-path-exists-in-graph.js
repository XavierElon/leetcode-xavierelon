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

    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }

    const visited = new Set()
    visited.add(source)
    const queue = [source]

    while (queue.length > 0) {
        const node = queue.shift()
        if (node === destination) return true

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor)
                visited.add(neighbor)
            }
        }
    }

    return false
};