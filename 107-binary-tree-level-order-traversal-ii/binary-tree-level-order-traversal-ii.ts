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

function levelOrderBottom(root: TreeNode | null): number[][] {
    if (!root) return []

    const result: number[][] = []
    const queue: TreeNode[] = [root]

    while (queue.length > 0) {
        const currentSize: number = queue.length
        const level: number[] = []

        for (let i = 0; i < currentSize; i++) {
            const currentNode: TreeNode = queue.shift()
            level.push(currentNode.val)

            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        result.unshift(level)
    }
    return result
};