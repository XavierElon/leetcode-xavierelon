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

function isValidBST(root: TreeNode | null): boolean {
    return validateBST(root, null, null)
};

function validateBST(node: TreeNode | null, min: number, max: number): boolean {
    if (node === null) return true
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
        return false
    }

    return validateBST(node.left, min, node.val) && validateBST(node.right, node.val, max)
}