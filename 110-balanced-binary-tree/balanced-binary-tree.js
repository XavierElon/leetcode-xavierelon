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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true

    if (!isBalanced(root.left) || !isBalanced(root.right)) return false

    let leftHeight = getHeight(root.left)
    let rightHeight = getHeight(root.right)

    return Math.abs(leftHeight - rightHeight) <= 1
};

function getHeight(node) {
    if (node === null) return 0

    return 1 + Math.max(getHeight(node.left), getHeight(node.right))
}