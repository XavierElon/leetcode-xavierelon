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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) return null

    if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        if (root.left === null && root.right === null) return null

        if (root.left === null) return root.right
        if (root.right === null) return root.left

        let successorParent = root
        let successor = root.right
        while (successor.left !== null) {
            successorParent = successor
            successor = successor.left
        }

        root.val = successor.val

        if (successorParent !== root) {
            successorParent.left = deleteNode(successorParent.left, successor.val)
        } else {
            successorParent.right = deleteNode(successorParent.right, successor.val)
        }
    }

    return root
};