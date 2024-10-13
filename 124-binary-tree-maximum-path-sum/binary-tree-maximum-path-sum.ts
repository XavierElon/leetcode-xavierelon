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

function maxPathSum(root: TreeNode | null): number {
    let maxSum: number = -Infinity

    function dfs(node: TreeNode | null): number {
        if (node === null) return 0
        
        const leftMax: number = Math.max(dfs(node.left), 0)
        const rightMax: number = Math.max(dfs(node.right), 0)

        const currentSum: number = node.val + leftMax + rightMax

        maxSum = Math.max(currentSum, maxSum)

        return node.val + Math.max(leftMax, rightMax)
    }

    dfs(root)

    return maxSum
};