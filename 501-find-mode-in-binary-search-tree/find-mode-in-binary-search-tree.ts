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

function findMode(root: TreeNode | null): number[] {
    if (!root) return[]

    let currentVal = 0
    let currentCount = 0
    let maxCount = 0
    let modes: number[] = []

    function inOrder(node: TreeNode | null): void {
        if (!node) return

        inOrder(node.left)

        if (node.val === currentVal) {
            currentCount++
        } else {
            currentVal = node.val
            currentCount = 1
        }

        if (currentCount > maxCount) {
            maxCount = currentCount
            modes = [currentVal]
        } else if (currentCount === maxCount) {
            modes.push(currentVal)
        }

        inOrder(node.right)
    }

    inOrder(root)
    return modes
};