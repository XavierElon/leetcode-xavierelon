/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head || left === right) return head

    let dummy: ListNode = new ListNode(0)
    dummy.next = head
    let prev: ListNode = dummy

    for (let i = 1; i < left; i++) {
        prev = prev.next
    }

    let prevSublist: ListNode | null = null
    let current: ListNode | null = prev.next
    let next: ListNode | null = null

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