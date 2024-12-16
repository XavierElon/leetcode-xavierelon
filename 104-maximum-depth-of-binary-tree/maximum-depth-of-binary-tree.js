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
var maxDepth = function(root) {
    function helper(node, currentDepth, maxDepthSoFar) {
        if (!node) return Math.max(maxDepthSoFar, currentDepth)

        return Math.max(
            helper(node.left, currentDepth + 1, maxDepthSoFar),
            helper(node.right, currentDepth + 1, maxDepthSoFar)
        )
    }

    return helper(root, 0, 0)
};