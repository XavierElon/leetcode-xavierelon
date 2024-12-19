/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let parent = []

    for (let i = 0; i < n; i++) {
        parent[i] = i
    }

    function find(a) {
        while (parent[a] !== a) {
            parent[a] = parent[parent[a]]
            a = parent[a]
        }

        return a
    }

    function union(a, b) {
        const rootA = find(a)
        const rootB = find(b)

        if (rootA !== rootB) {
            parent[rootA] = rootB
        }
    }

    for (const [a, b] of edges) {
        union(a, b)
    }

    return find(source) === find(destination)
};