/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return
    let current = head

    while (current) {
        let copy = new _Node(current.val, current.next)
        current.next = copy
        current = current.next.next
    }

    current = head
    while (current) {
        if (current.random) {
            current.next.random = current.random.next
        }

        current = current.next.next
    }

    current = head

    const copyHead = current.next
    let copyCurrent = current.next

    while (current) {
        current.next = current.next.next
        if (copyCurrent.next !== null) {
            copyCurrent.next = copyCurrent.next.next
        }

        current = current.next
        copyCurrent = copyCurrent.next
    }

    return copyHead
};