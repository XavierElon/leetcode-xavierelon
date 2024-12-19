/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (edges.length !== n - 1) return false
    let parent = new Array(n).fill(0)
    let rank = new Array(n).fill(1)

    for (let i = 0; i < n; i++) {
        parent[i] = i
    }

    function find(a) {
        if (parent[a] !== a) {
            parent[a] = find(parent[a])
        }
        return parent[a]
    }

    function union(a, b) {
        const rootA = find(a)
        const rootB = find(b)

        if (rootA === rootB) return false

        if (rank[rootA] < rank[rootB]) {
            parent[rootA] = rootB
        } else if (rank[rootA] > rank[rootB]) {
            parent[rootB] = rootA
        } else {
            parent[rootB] = rootA
            rank[rootA]++
        }

        return true
    }

    for (const [a, b] of edges) {
        if (!union(a, b)) return false
    }

    return true
};