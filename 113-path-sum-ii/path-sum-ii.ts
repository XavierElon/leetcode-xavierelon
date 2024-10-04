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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = []
    const currentPath: number[] = []

    function dfs(node: TreeNode | null, remainingSum: number): void {
        if (node === null) return

        currentPath.push(node.val)
        remainingSum -= node.val

        if (node.left === null && node.right === null) {
            if (remainingSum === 0) {
                result.push([...currentPath])
            }
        } else {
            if (node.left !== null) {
                dfs(node.left, remainingSum)
            }
            if (node.right !== null) {
                dfs(node.right, remainingSum)
            }
        }

        currentPath.pop()
    }

    dfs(root, targetSum)
    return result
};