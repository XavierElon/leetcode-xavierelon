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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    bfs(root.left, root.right, 1)
    return root
};

function bfs(leftNode, rightNode, level) {
    if (!leftNode || !rightNode) return

    if (level % 2 === 1) {
        let temp = leftNode.val
        leftNode.val = rightNode.val
        rightNode.val = temp
    }

    bfs(leftNode.left, rightNode.right, level+1)
    bfs(leftNode.right, rightNode.left, level+1)
}