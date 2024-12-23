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
    let found = false
    let next = null
    
    function findNext(node) {
        if (node && !next) {
            findNext(node.left)

            if (found && !next) next = node
            if (node === p) found = true

            findNext(node.right)
        }
    }

    findNext(root)
    return next
};