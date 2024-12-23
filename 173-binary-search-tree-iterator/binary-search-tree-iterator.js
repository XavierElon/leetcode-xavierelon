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
 */
var BSTIterator = function(root) {
    this.stack = [];
    this._pushLeftNodes(root);
};

/**
 * Helper method to push all left descendants of a node onto the stack.
 * @param {TreeNode} node - The starting node.
 */
BSTIterator.prototype._pushLeftNodes = function(node) {
    while (node !== null) {
        this.stack.push(node);
        node = node.left;
    }
};

/**
 * @return {number} - Returns the next smallest number in the BST.
 */
BSTIterator.prototype.next = function() {
    if (!this.hasNext()) {
        throw new Error("No more elements in the BST Iterator");
    }

    // Pop the top node from the stack
    const topmostNode = this.stack.pop();

    // If the node has a right child, push all its left descendants
    if (topmostNode.right !== null) {
        this._pushLeftNodes(topmostNode.right);
    }

    return topmostNode.val;
};

/**
 * @return {boolean} - Returns true if there exists a next number in the in-order traversal.
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */