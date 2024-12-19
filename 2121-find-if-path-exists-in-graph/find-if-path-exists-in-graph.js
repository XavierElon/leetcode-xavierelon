/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // Initialize parent and rank arrays
    let parent = new Array(n);
    let rankArr = new Array(n).fill(1); // Initialize all ranks to 1

    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }

    // Find function with Path Compression
    function find(a) {
        if (parent[a] !== a) {
            parent[a] = find(parent[a]); // Path Compression
        }
        return parent[a];
    }

    // Union function with Union by Rank
    function union(a, b) {
        const rootA = find(a);
        const rootB = find(b);

        if (rootA === rootB) return; // Already in the same set

        // Union by Rank
        if (rankArr[rootA] < rankArr[rootB]) {
            parent[rootA] = rootB;
        } else if (rankArr[rootA] > rankArr[rootB]) {
            parent[rootB] = rootA;
        } else {
            parent[rootB] = rootA;
            rankArr[rootA] += 1;
        }
    }

    // Apply union operation for all edges
    for (const [a, b] of edges) {
        union(a, b);
    }

    // Check if source and destination are in the same component
    return find(source) === find(destination);
};