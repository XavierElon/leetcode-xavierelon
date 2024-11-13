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

function preorderTraversal(root: TreeNode | null): number[] {
    if (root === null) return []
    const res: number[] = []

    const preorder = (node: TreeNode | null): void => {
        if (node === null) return

        res.push(node.val)
        preorder(node.left)
        preorder(node.right)
    }

    preorder(root)

    return res
};