/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
    logs.sort((a, b) => a[0] - b[0])
    const parent = new Array(n)
    const rank = new Array(n).fill(1)

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

    let components = n

    for (const [timestamp, a, b] of logs) {
        if (union(a, b)) {
            components -= 1

            if (components === 1) return timestamp
        }
    }

    return -1
};