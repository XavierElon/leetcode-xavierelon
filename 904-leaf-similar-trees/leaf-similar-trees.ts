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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const getLeaves = (root: TreeNode | null, leaves: number[]): void => {
        if (root === null) return

        if (root.left === null && root.right === null) {
            leaves.push(root.val)
        }

        getLeaves(root.left, leaves)
        getLeaves(root.right, leaves)
    }

    const leaves1: number[] = []
    const leaves2: number[] = []

    getLeaves(root1, leaves1)
    getLeaves(root2, leaves2)

    return leaves1.join(',') === leaves2.join(',') 
};