/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length
    const parent = new Array(n).fill(0)
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

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j] === 1) {
                union(i, j)
            }
        }
    }

    const provinces = new Set()

    for (let i = 0; i < n; i++) {
        provinces.add(find(i))
    }

    return provinces.size
};