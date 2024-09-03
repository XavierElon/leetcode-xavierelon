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

function evaluateTree(root: TreeNode | null): boolean {
    if (!root) return false

    if (root.left === null && root.right === null) {
        return root.val === 1
    }

    const leftNode: boolean = evaluateTree(root.left)
    const rightNode: boolean = evaluateTree(root.right)

    if (root.val === 2) {
        return leftNode || rightNode
    } else if (root.val === 3) {
        return leftNode && rightNode
    }
};