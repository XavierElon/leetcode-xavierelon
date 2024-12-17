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
var preorderTraversal = function(root) {
    if (!root) return []

    const res = []
    const stack = [root]

    while (stack.length) {
        const node = stack.pop()
        console.log('node = ')
        console.log(node)
        res.push(node.val)
        console.log('res = ')
        console.log(res)
        console.log('node.left = ' + node.left)
        console.log('node.right = ' + node.right)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)

    }
    return res
};