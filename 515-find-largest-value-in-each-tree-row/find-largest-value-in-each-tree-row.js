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
    if (!root) return []

    const res = []
    const queue = [root] 

    while (queue.length > 0) {
        const levelSize = queue.length
        const level = []

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        const levelMax = Math.max(...level)
        res.push(levelMax)
    }

    return res
};