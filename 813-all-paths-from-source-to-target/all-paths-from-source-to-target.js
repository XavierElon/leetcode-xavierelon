/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const result = []
    const queue = [[0]]
    const n = graph.length

    while (queue.length > 0) {
        const path = queue.shift()
        lastNode = path[path.length - 1]

        if (lastNode === n - 1) {
            result.push(path)
        } else {
            for (const neighbor of graph[lastNode]) {
                const newPath = [...path, neighbor]
                queue.push(newPath)
            }
        }

    }

    return result
};