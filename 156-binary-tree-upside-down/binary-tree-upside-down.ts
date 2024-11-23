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

function upsideDownBinaryTree(root: TreeNode | null): TreeNode | null {
       if (!root || !root.left) {
        return root;
    }

    // Recursively call the function for the left child
    const newRoot = upsideDownBinaryTree(root.left);

    // Update the links
    root.left.left = root.right;
    root.left.right = root;
    root.left = null;
    root.right = null;

    return newRoot; 
};