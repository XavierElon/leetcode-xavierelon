/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const n = edges.length + 1
    const array = new Array(n+1).fill(0)

    for (const [u, v] of edges) {
        array[u]++
        array[v]++
    }

    for (let i = 1; i <= n; i++) {
        if (array[i] === n - 1) {
            return i
        }
    }

    return -1
};