/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]

    const adjList = new Array(n).fill(null).map(() => [])
    for (const [u, v] of edges) {
        adjList[u].push(v)
        adjList[v].push(u)
    }

    let leaves = []
    for (let i = 0; i < n; i++) {
        if (adjList[i].length === 1) {
            leaves.push(i)
        }
    }

    let remainingNodes = n
    while (remainingNodes > 2) {
        const leavesCount = leaves.length
        remainingNodes -= leavesCount

        const newLeaves = []

        for (const leaf of leaves) {
            const neighbor = adjList[leaf][0]
            adjList[neighbor] = adjList[neighbor].filter(node => node !== leaf)

            if (adjList[neighbor].length === 1) {
                newLeaves.push(neighbor)
            }
        }

        leaves = newLeaves
    }

    return leaves
};