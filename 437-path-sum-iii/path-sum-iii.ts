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

function pathSum(root: TreeNode | null, targetSum: number): number {
    const prefixSums: Map<number, number> = new Map()
    prefixSums.set(0, 1)
    let count: number = 0

    function dfs(node: TreeNode | null, currentSum: number): void {
        if (root === null) return

        currentSum += node.val
        const neededSum: number = currentSum - targetSum
        if (prefixSums.has(neededSum)) {
            count += prefixSums.get(neededSum)
        }

        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1)

        if (node.left !== null) dfs(node.left, currentSum)
        if (node.right !== null) dfs(node.right, currentSum)

        prefixSums.set(currentSum, prefixSums.get(currentSum) - 1)
    }

    dfs(root, 0)
    return count
};