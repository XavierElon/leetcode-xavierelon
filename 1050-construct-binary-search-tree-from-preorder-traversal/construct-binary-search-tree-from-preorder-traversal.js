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
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let i = 0

    function buildBST(bound) {
        if (i === preorder.length || preorder[i] > bound) {
            return null
        }

        const rootVal = preorder[i++]
        const root = new TreeNode(rootVal)

        root.left = buildBST(rootVal)

        root.right = buildBST(bound)

        return root
    }

    return buildBST(Infinity)
};