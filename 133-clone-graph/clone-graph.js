/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return 

    const map = new Map()
    const clonedNode = new Node(node.val, [])
    map.set(node, clonedNode)

    const queue = [node]

    while (queue.length > 0) {
        const current = queue.shift()

        for (const neighbor of current.neighbors) {
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val, []))
                queue.push(neighbor)
            }
            map.get(current).neighbors.push(map.get(neighbor))
        }
    }
    return clonedNode
};