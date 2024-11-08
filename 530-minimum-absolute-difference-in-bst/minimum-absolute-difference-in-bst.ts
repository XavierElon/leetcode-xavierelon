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

function getMinimumDifference(root: TreeNode | null): number {
    let minDiff: number = Infinity
    let prev = null

    function inorder(node: TreeNode | null) {
        if (!node) return

        inorder(node.left)

        if (prev !== null) {
            const currentDiff = node.val - prev
            if (currentDiff < minDiff) minDiff = currentDiff
        }
        prev = node.val
        inorder(node.right)
    }

    inorder(root)
    return minDiff
};