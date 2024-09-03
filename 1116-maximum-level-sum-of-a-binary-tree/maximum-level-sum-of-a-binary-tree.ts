/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxLevelSum(root: TreeNode | null): number {
    if (!root) return 0

    const queue: TreeNode[] = [root]
    let maxSum = -Infinity
    let maxLevel = 1
    let currentLevel = 1

    while (queue.length > 0) {
        const currentSize: number = queue.length
        let levelSum: number = 0

        for (let i = 0; i < currentSize; i++) {
            const currentNode: TreeNode = queue.shift()
            levelSum += currentNode.val

            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }

        if (levelSum > maxSum) {
            maxSum = levelSum
            maxLevel = currentLevel
        }

        currentLevel++
    }
    return maxLevel
};