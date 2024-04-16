/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let seen = new Set()
    let current = head

    while (current !== null) {
        if (seen.has(current)) return true
        seen.add(current)
        current = current.next
    }
    return false
};