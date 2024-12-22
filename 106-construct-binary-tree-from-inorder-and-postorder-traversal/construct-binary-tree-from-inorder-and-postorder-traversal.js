/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) return null;

    // Build a hash map to store value -> its index relations
    const inorderIndexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i);
    }

    // Initialize the postorder index to the last element
    let postIdx = postorder.length - 1;

    /**
     * Recursive helper function to build the tree.
     * @param {number} inLeft - Left boundary in inorder array
     * @param {number} inRight - Right boundary in inorder array
     * @returns {TreeNode}
     */
    function helper(inLeft, inRight) {
        // If there are no elements to construct the subtree
        if (inLeft > inRight) return null;

        // Pick up postIdx element as a root
        const rootVal = postorder[postIdx];
        const root = new TreeNode(rootVal);

        // Root splits inorder list into left and right subtrees
        const inIdx = inorderIndexMap.get(rootVal);

        // Decrement postIdx
        postIdx--;

        // Build right subtree first
        root.right = helper(inIdx + 1, inRight);

        // Then build left subtree
        root.left = helper(inLeft, inIdx - 1);

        return root;
    }

    return helper(0, inorder.length - 1);
};