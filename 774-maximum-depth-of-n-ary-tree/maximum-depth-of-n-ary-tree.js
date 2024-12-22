/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0

    let maxChildDepth = 0

    for (let child of root.children) {
        maxChildDepth = Math.max(maxChildDepth, maxDepth(child))
    }

    return maxChildDepth + 1
};