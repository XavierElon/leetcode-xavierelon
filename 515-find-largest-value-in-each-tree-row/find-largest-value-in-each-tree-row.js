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
 * @return {number[]}
 */
var largestValues = function(root) {
    const result = []

    function dfs(node, level) {
        if (!node) return

        if (result[level] === undefined) {
            result[level] = node.val
        } else {
            result[level] = Math.max(result[level], node.val)
        }

        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
    dfs(root, 0)
    return result
};