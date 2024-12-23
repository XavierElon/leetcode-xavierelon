/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums) return null
    return sortedBST(nums, 0, nums.length - 1)
};

const sortedBST = function(nums, left, right) {
    if (left > right) return null
    const mid = Math.floor((left + right) / 2)
    const currentNode = new TreeNode(nums[mid])

    currentNode.left = sortedBST(nums, left, mid-1)
    currentNode.right = sortedBST(nums, mid + 1, right)

    return currentNode
}