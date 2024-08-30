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

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null

    let current: ListNode = head
    let next: ListNode = null;
    let prev: ListNode = null;

    while (current !== null) {
        next = current.next
        current.next = prev

        prev = current
        current = next
    }

    return prev
    
};