/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return root

    let leftmost = root

    while (leftmost.left) {
        let current = leftmost

        while (current) {
            current.left.next = current.right

            if (current.next) {
                current.right.next = current.next.left
            }

            current = current.next
        }

        leftmost = leftmost.left
    }
    return root
};
