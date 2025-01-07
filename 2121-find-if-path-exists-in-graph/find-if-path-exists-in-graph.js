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
    const stack = [source]

    while (stack.length > 0) {
        const current = stack.pop()

        if (current === destination) return true

        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor)
                visited.add(neighbor)
            }
        }
    }

    return false
};