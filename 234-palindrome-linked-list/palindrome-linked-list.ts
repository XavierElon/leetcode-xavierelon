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

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true

    let slow = head
    let fast = head
    let prev = null

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    prev = null
    let next = null
    while (slow) {
        next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }

    let left = head
    let right = prev

    while (right) {
        if (left.val !== right.val) {
            return false
        }
        left = left.next
        right = right.next
    }

    return true
};