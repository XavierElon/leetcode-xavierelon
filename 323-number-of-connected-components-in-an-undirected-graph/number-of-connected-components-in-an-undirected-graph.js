/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
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

        if (rootA === rootB) return

        if (rank[rootA] < rank[rootB]) {
            parent[rootA] = rootB
        } else if (rank[rootA] > rank[rootB]) {
            parent[rootB] = rootA
        } else {
            parent[rootB] = rootA
            rank[rootA]++
        }
    }

    for (const [a, b] of edges) {
        union(a, b)
    }

    const set = new Set()

    for (let i = 0; i < n; i++) {
        set.add(find(i))
    }

    return set.size
};