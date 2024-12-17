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
    if (!root) return []
    const levels = []
    const queue = [root]

    while (queue.length !== 0) {
        const currentLevel = []
        const levelSize = queue.length

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            currentLevel.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        levels.push(currentLevel)
    }
    return levels
};