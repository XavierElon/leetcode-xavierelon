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
    if (root == null) return -1

    let diff = Math.abs(height(root.left) - height(root.right))

    return diff < 2 && isBalanced(root.left) && isBalanced(root.right)
};

function height(root) {
    if (root === null) return -1

    return 1 + Math.max(height(root.left), height(root.right))
}