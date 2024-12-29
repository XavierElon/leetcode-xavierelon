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
    const columnMap = new Map()
    let minColumn = 0, maxColumn = 0

    const queue = [{node: root, col: 0, row: 0}]

    while (queue.length > 0) {
        const {node, col, row } = queue.shift()
        
        if (!columnMap.has(col)) {
            columnMap.set(col, [])
        }
        columnMap.get(col).push([row, node.val])

        minColumn = Math.min(minColumn, col)
        maxColumn = Math.max(maxColumn, col)

        if (node.left) {
            queue.push({ node: node.left, row: row + 1, col: col - 1})
        }
        if (node.right) {
            queue.push({ node: node.right, row: row + 1, col: col + 1 })
        }
    }

    const result = []

    for (let c = minColumn; c <= maxColumn; c++) {
        const pairs = columnMap.get(c) || []
        pairs.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0]
            return a[1] - b[1]
        })

        result.push(pairs.map(pair => pair[1]))
    }

    return result
};