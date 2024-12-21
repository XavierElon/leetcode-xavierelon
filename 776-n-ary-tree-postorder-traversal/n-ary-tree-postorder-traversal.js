/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return []
    const res = []

    function recurse(node) {
        for (let child of node.children) {
            recurse(child)
        }
        res.push(node.val)
    }

    recurse(root)
    return res
};