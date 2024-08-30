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

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null

    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (fast && fast.next) {
        slow = slow!.next
        fast = fast.next.next

        if (slow === fast) {
            let pointer: ListNode | null = head

            while (pointer !== slow) {
                pointer = pointer!.next
                slow = slow!.next
            }
            return pointer
        }
    }
    return null
};