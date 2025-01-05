/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return

    const visited = new Map()

    function dfs(node) {
        if (visited.has(node)) {
            return visited.get(node)
        }

        const clone = new _Node(node.val, [])

        visited.set(node, clone)

        clone.neighbors = node.neighbors.map(neighbor => dfs(neighbor))

        return clone
    }

    return dfs(node)
};