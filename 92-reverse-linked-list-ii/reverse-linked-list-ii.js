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
    let prev = dummy

    for (let i = 1; i < left; i++) {
        prev = prev.next
    }

    let current = prev.next
    let next = null
    let prevSublist = null

    for (let i = 0; i < right - left + 1; i++) {
        next = current.next
        current.next = prevSublist
        prevSublist = current
        current = next
    }

    let startNode = prev.next
    startNode.next = current
    prev.next = prevSublist

    return dummy.next
};