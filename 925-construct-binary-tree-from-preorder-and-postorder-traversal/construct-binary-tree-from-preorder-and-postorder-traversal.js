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
    const map = {}; let i = 0;
    
    for(let i = 0; i < post.length; i++) {
        map[post[i]] = i;
    }
    
    function callDFS(start, end) {
        if(start > end || i >= pre.length) return null;
        const node = pre[i++], idx = map[pre[i]];
        const tree = new TreeNode(node);
        if(idx < start || idx > end) return tree;
        tree.left = callDFS(start, idx);
        tree.right = callDFS(idx+1, map[node]-1)
        return tree;
    }
    return callDFS(0, post.length-1);
};