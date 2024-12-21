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
var countUnivalSubtrees = function(root) {
    let count = 0

    function dfs(node) {
        if (!node) return true

        const leftIsUni = dfs(node.left)
        const rightIsUni = dfs(node.right)

        if (!leftIsUni || !rightIsUni) {
            return false
        }

        if (node.left && node.val !== node.left.val) {
            return false
        }

        if (node.right && node.val !== node.right.val) {
            return false
        }

        count++
        return true
    }

    dfs(root)
    return count
};