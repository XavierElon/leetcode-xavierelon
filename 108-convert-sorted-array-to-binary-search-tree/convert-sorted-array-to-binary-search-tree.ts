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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null

    function buildBST(left: number, right: number): TreeNode | null {
        if (left > right) return null
        
        const mid: number = Math.floor((left + right) / 2)
        const node: TreeNode = new TreeNode(nums[mid])

        node.left = buildBST(left, mid - 1)
        node.right = buildBST(mid + 1, right)

        return node
    }

    return buildBST(0, nums.length-1)
};