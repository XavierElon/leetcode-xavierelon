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
    const levels = []
    let minCol = 0
    let maxCol = 0
    let colMap = new Map()

    const queue = [{node: root, row: 0, col: 0}]

    while (queue.length > 0) {
        const { node, row, col } = queue.shift()

        if (!colMap.has(col)) {
            colMap.set(col, [])
        }
        colMap.get(col).push([row, node.val])

        minCol = Math.min(minCol, col)
        maxCol = Math.max(maxCol, col)

        if (node.left) {
            queue.push({ node: node.left, row: row + 1, col: col - 1})
        }
        if (node.right) {
            queue.push({ node: node.right, row: row + 1, col: col + 1})
        }
    }

    const result = []
    for (let c = minCol; c <= maxCol; c++) {
        const pairs = colMap.get(c) || []
        pairs.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0]
            return a[1] - b[1]
        })
        result.push(pairs.map(pair => pair[1]))
    }

    return result
};