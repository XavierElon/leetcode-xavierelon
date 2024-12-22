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

    function dfs(bound) {
        if (i === preorder.length || preorder[i] > bound) return null

        const rootVal = preorder[i++]
        const root = new TreeNode(rootVal)

        root.left = dfs(rootVal)
        root.right = dfs(bound)

        return root
    }

    return dfs(Infinity)
};