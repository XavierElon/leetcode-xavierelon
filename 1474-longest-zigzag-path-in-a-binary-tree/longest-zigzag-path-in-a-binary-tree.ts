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

function longestZigZag(root: TreeNode | null): number {
    let maxZigZag: number = 0

    function dfs(node: TreeNode | null): [number, number] {
        if (node === null) return [-1, -1]

        const left: [number, number] = dfs(node.left)
        const right: [number, number] = dfs(node.right)

        const currentLeft: number = left[1] + 1
        const currentRight: number = right[0] + 1

        maxZigZag = Math.max(maxZigZag, currentLeft, currentRight)

        return [currentLeft, currentRight]
    }

    dfs(root)
    return maxZigZag
};