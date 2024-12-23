/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    
    function findRoot(node) {
        while(node.parent !== null) {
            node = node.parent
        }
        return node
    }

    const root = findRoot(p)

    function recurse(node, p, q) {
        if (node === null) return null
        if (node === p || node === q) return node

        const left = recurse(node.left, p, q)
        const right = recurse(node.right, p, q)

        if (left && right) return node

        return left || right
    }

    return recurse(root, p, q)
};