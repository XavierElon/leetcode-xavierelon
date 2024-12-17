/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function(root) {
    if (!root) return null

    let first = null
    let last = null

    function inOrder(node) {
        if (!node) return

        inOrder(node.left)

        if (last) {
            last.right = node
            node.left = last
        } else {
            first = node
        }

        last = node

        inOrder(node.right)
    }

    inOrder(root)

    first.left = last
    last.right = first

    return first
};