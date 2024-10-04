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
    let maxSum: number = -Infinity
    let maxLevel: number = 1
    let currentLevel: number = 1

    while (queue.length > 0) {
        let currentSum: number = 0
        const levelSize: number = queue.length

        for (let i = 0; i < levelSize; i++) {
            const node: TreeNode = queue.shift()
            currentSum += node.val

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        if (currentSum > maxSum) {
            maxSum = currentSum
            maxLevel = currentLevel
        }
        currentLevel++
    }
    return maxLevel
};