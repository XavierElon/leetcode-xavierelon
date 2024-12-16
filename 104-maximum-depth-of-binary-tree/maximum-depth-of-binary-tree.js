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
    if (!root) return 0

    let depth = 0
    let queue = [root]

    while (queue.length > 0) {
        let levelSize = queue.length

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        depth++
    }

    return depth
};