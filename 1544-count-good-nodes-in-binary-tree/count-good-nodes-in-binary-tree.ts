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

function goodNodes(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null, maxSoFar: number): number => {
        if (node === null) return 0

        let good = node.val >= maxSoFar ? 1 : 0

        maxSoFar = Math.max(maxSoFar, node.val)
        
        good += dfs(node.left, maxSoFar)
        good += dfs(node.right, maxSoFar)

        return good
    }

    return dfs(root, root.val)
};