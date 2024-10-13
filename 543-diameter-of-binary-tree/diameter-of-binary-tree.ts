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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter: number = 0

    function dfs(node: TreeNode | null): number {
        if (node === null) return 0

        const leftDepth: number = dfs(node.left)
        const rightDepth: number = dfs(node.right)
        
        maxDiameter = Math.max(maxDiameter, rightDepth + leftDepth)

        return Math.max(rightDepth, leftDepth) + 1
    }

    dfs(root)

    return maxDiameter
};