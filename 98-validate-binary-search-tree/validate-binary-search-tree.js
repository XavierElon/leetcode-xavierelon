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
    if (root === null) return true

    function recurse(node, min, max) {
        if (node === null) return true

        if (min !== null && node.val <= min) return false
        if (max !== null && node.val >= max) return false


        return recurse(node.left, min, node.val) && 
            recurse(node.right, node.val, max)
    }

    return recurse(root, null, null)
};