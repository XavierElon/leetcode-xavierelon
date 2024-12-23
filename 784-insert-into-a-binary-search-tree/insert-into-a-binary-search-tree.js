/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root === null) return new TreeNode(val)

    let current = root
    while (current !== null) {
        if (current.val > val && current.left) {
            current = current.left
        } else if (current.val < val && current.right) {
            current = current.right
        } else if (current.val > val && !current.left) {
            current.left = new TreeNode(val)
            break
        } else if (current.val < val && !current.right) {
            current.right = new TreeNode(val)
            break
        }
    }

    return root
};