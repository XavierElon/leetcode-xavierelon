/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let successor = null
    let current = root

    while (current !== null) {
        if (p.val < current.val) {
            successor = current
            current = current.left
        } else {
            current = current.right
        }
    }

    return successor
};