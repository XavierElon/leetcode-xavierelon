/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null

    const rootVal = preorder[0]
    const root = new TreeNode(rootVal)

    const mid = inorder.indexOf(rootVal)

    const leftInorder = inorder.slice(0, mid)
    const rightInorder = inorder.slice(mid + 1)

    const leftPreorder = preorder.slice(1, mid + 1)
    const rightPreorder = preorder.slice(mid + 1)

    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)

    return root
};