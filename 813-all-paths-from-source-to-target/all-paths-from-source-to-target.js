/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const paths = []
    if (graph === null || graph.length === 0) return graphs
    const path = [0]

    function dfs(node) {
        if (node === graph.length - 1) {
            paths.push([...path])
            return
        }

        for (let neighbor of graph[node]) {
            path.push(neighbor)
            dfs(neighbor)
            path.pop()
        }
    }

    dfs(0)
    return paths
};