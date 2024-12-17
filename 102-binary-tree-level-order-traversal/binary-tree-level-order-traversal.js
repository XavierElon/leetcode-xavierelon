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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levels = []
    function recurse(node, level) {
        if (levels.length === level) levels.push([])
        levels[level].push(node.val)
        if (node.left) recurse(node.left, level + 1)
        if (node.right) recurse(node.right, level + 1)
    }
    if (root) recurse(root, 0)
    return levels
};