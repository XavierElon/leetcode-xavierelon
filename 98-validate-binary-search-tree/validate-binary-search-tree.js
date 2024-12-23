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
var isValidBST = function(root) {
    if (!root) return true
    return validateBST(root, null, null)
};

function validateBST (root, min, max) {
    if (root === null) return true

    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false

    return validateBST(root.left, min, root.val) && validateBST(root.right, root.val, max)
}