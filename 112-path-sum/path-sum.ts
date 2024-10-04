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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false

    if (root.left === null && root.right === null) {
        return targetSum === root.val
    }

    const remainingSum: number = targetSum - root.val
    return (
        (root.left !== null && hasPathSum(root.left, remainingSum)) ||
        (root.right !== null && hasPathSum(root.right, remainingSum))
    )
};