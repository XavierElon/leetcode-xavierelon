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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    let i = 0;
    
    function callDFS(arr) {
        if(!arr.length) return null;
        const node = pre[i++]
        const idx = arr.indexOf(pre[i]);
        const tree = new TreeNode(node);
        tree.left = callDFS(arr.slice(0, idx+1));
        tree.right = callDFS(arr.slice(idx+1, arr.indexOf(node)))
        return tree;
    }
    return callDFS(post)
};