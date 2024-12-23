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
var isBalanced = function(root) {
    if (root === null) return true

    const stack = []
    const heights = new Map()
    let lastVisited = null

    let current = root

    while (stack.length > 0 || current !== null) {
        if (current !== null) {
            stack.push(current)
            current = current.left
        } else {
            let peekNode = stack[stack.length - 1]
            if (peekNode.right !== null && lastVisited !== peekNode.right) {
                current = peekNode.right
            } else {
                stack.pop()

                let leftHeight = heights.get(peekNode.left) || 0
                let rightHeight = heights.get(peekNode.right) || 0

                if (Math.abs(leftHeight - rightHeight) > 1) {
                    return false
                }

                heights.set(peekNode, 1 + Math.max(leftHeight, rightHeight))

                lastVisited = peekNode
            }
        }
    }
    return true
};