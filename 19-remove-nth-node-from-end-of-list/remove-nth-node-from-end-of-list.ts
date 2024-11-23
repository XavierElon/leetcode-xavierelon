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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy: ListNode = new ListNode(0, head)
    
    let slow: ListNode | null = dummy
    let fast: ListNode | null = dummy
    
    for (let i = 0; i <= n; i++) {
        if (fast === null) {
            return head
        }
        fast = fast.next
    }
    
    while (fast !== null) {
        slow = slow.next
        fast = fast.next
    }
    
    if (slow !== null && slow.next !== null) {
        slow.next = slow.next.next
    }
    return dummy.next
};