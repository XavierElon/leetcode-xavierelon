/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {

    function leftDepth(node) {
        if (!node) return 0
        return leftDepth(node.left) + 1
    }

    function rightDepth(node) {
        if (!node) return 0
        return rightDepth(node.right) + 1
    }

    function traverse(node) {
        const leftHeight = leftDepth(node)
        const rightHeight = rightDepth(node)

        if (leftHeight === rightHeight) return Math.pow(2, leftHeight) - 1
        return traverse(node.left) + traverse(node.right) + 1
    }

    return traverse(root)
};