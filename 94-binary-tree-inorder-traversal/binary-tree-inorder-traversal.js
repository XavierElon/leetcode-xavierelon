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
var inorderTraversal = function(root) {
    if (!root) return []

    let res = []
    let stack = []
    let current = root

    while (current !== null || stack.length > 0) {
        if (current !== null) {
            stack.push(current)
            current = current.left
        } else {
            current = stack.pop()
            res.push(current.val)
            current = current.right
        }
    }

    return res
};