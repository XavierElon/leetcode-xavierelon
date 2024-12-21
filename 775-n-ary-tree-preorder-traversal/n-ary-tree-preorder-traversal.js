/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = []
    if (!root) return res

    function recurse(node) {
        res.push(node.val)
        for (let child of node.children) {
            recurse(child)
        }
    }

    recurse(root)
    return res
};