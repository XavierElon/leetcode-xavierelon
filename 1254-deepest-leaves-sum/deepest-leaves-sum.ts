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

function deepestLeavesSum(root: TreeNode | null): number {
    if (!root) return 0

    let maxDepth: number = -1
    let sum: number = 0;

    function dfs(root: TreeNode | null, depth: number): void {
        if (!root) return

        if (!root.left && !root.right) {
            if (depth > maxDepth) {
                maxDepth = depth
                sum = root.val
            } else if (depth === maxDepth) {
                sum += root.val
            }
        }
        dfs(root.left, depth + 1)
        dfs(root.right, depth + 1)
    }

    dfs(root, 0)
    return sum
};