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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    if (!root) return []
    const colMap = new Map()

    let minCol = 0, maxCol = 0

    function dfs(node, col, row) {
        if (!node) return

        if (!colMap.has(col)) colMap.set(col, [])
        colMap.get(col).push([row, node.val])
        minCol = Math.min(minCol, col)
        maxCol = Math.max(maxCol, col)

        if (node.left) dfs(node.left, col - 1, row + 1)
        if (node.right) dfs(node.right, col + 1, row + 1)
    }

    dfs(root, 0, 0)

    const res = []
    for (let c = minCol; c <= maxCol; c++) {
        const pairs = colMap.get(c) || []
        pairs.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0]
            return a[1] - b[1]
        })
        res.push(pairs.map(pair => pair[1]))
    }

    return res
};