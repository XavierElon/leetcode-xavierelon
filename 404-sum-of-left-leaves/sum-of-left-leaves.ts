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

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) return 0

    let sum = 0

    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val
    }

    sum += sumOfLeftLeaves(root.left)
    sum += sumOfLeftLeaves(root.right)

    return sum
};