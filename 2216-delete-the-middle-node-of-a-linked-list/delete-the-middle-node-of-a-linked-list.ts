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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head || head.next === null) return null

    let fast: ListNode | null = head
    let slow: ListNode | null = head
    let prev: ListNode | null = null

    while (fast !== null && fast.next !== null) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    if (prev !== null) {
        prev!.next = slow!.next

    }
    return head
};