/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
let visited = new Map()
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    

    if (node === null) return node

    if (visited.has(node)) {
        return visited.get(node)
    }

    let cloneNode = new Node(node.val, [])

    visited.set(node, cloneNode)

    for (let neighbor of node.neighbors) {
        cloneNode.neighbors.push(cloneGraph(neighbor))
    }

    return cloneNode
};