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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null
    const queue: TreeNode[] = [root]

    while (queue.length > 0) {
        const currentNode: TreeNode = queue.shift()

        let temp = currentNode.left
        currentNode.left = currentNode.right
        currentNode.right = temp

        if (currentNode.left !== null) {
            queue.push(currentNode.left)
        }

        if (currentNode.right !== null) {
            queue.push(currentNode.right)
        }
    }

    return root
};