/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head

    let dummy = new ListNode(0)
    dummy.next = head
    let start = dummy

    for (let i = 1; i < left; i++) {
        start = start.next
    }

    let current = start.next
    let prev = null
    let next = null

    for (let i = 0; i < right - left + 1; i++) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    let startNode = start.next
    startNode.next = current
    start.next = prev

    return dummy.next
};