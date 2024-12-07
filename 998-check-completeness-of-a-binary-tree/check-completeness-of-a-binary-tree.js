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
var isCompleteTree = function(root) {
    function dfs(node, index) {
        if (!node) return 0

        const leftCount = dfs(node.left, 2 * index + 1)
        const rightCount = dfs(node.right, 2 * index + 2)

        return leftCount + rightCount + 1
    }

    if (!root) return true

    const nodeCount = dfs(root, 0)

    function validate(node, index, totalNodes) {
        if (!node) return true

        if (index >= totalNodes) return false

        return validate(node.left, 2 * index + 1, totalNodes) && validate(node.right, 2 * index + 2, totalNodes)
    }

    return validate(root, 0, nodeCount)
};