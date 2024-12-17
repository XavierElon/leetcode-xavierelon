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
var postorderTraversal = function(root) {
    if (!root) return []
    const res = []
    const stack = [root]

    while (stack.length !== 0) {
        const node = stack.pop()
        res.unshift(node.val)
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }   
    return res
};