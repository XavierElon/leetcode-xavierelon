/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = []

    function dfs(node, level) {
        if (!node) return

        if (res.length === level) {
            res.push([])
        }

        res[level].push(node.val)

        for (let child of node.children) {
            dfs(child, level + 1)
        }
    }

    dfs(root, 0)

    return res
};