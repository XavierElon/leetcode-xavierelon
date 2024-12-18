/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const firstEdge = edges[0]
    const secondEdge = edges[1]

    if (secondEdge.includes(firstEdge[0])) {
        return firstEdge[0]
    } else {
        return firstEdge[1]
    }
};