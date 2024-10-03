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

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0

    let depth: number = 0
    const queue: TreeNode[] = [root]

    while (queue.length > 0) {
        const levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const node: TreeNode = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        depth++
    }

    return depth
};