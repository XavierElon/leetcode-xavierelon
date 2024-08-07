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

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) return true

    if (!isBalanced(root.left) || !isBalanced(root.right)) return false

    const leftHeight: number = getHeight(root.left)
    const rightHeight: number = getHeight(root.right)

    return Math.abs(rightHeight - leftHeight) <= 1
};

const getHeight = (node: TreeNode | null): number => {
    if (node === null) return 0

    return 1 + Math.max(getHeight(node.left), getHeight(node.right))
}