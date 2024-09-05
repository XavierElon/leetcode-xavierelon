/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    const queue = new Array()

    queue.push([root, null])

    while (queue.length > 0) {
        let xIsInLevel = [false, null]
        let yIsInLevel = [false, null]
        const length = queue.length

        for (let i = 0; i < length; i++) {
            const [node, parent] = queue.shift()

            if (node.val === x) xIsInLevel = [true, parent]
            if (node.val === y) yIsInLevel = [true, parent]

            if (xIsInLevel[0] == true && yIsInLevel[0] == true && xIsInLevel[1] != yIsInLevel[1]) {
                return true
            }

            if (node.left) queue.push([node.left, node.val])
            if (node.right) queue.push([node.right, node.val])
        }
        if (xIsInLevel[0] && !yIsInLevel[0] || !xIsInLevel[0] && yIsInLevel[0]) return false
    }

    return false
};