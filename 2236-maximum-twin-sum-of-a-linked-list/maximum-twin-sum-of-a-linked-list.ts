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

function pairSum(head: ListNode | null): number {
    if (!head) return 0

    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let prev: ListNode | null = null
    let current: ListNode | null = slow

    while (current !== null) {
        let nextTemp: ListNode = current.next
        current.next = prev
        prev = current
        current = nextTemp
    }

    let maxTwinSum: number = 0
    let firstHalf: ListNode | null = head
    let secondHalf: ListNode | null = prev

    while (secondHalf !== null) {
        const twinSum: number = firstHalf.val + secondHalf.val
        maxTwinSum = Math.max(maxTwinSum, twinSum)
        firstHalf = firstHalf.next
        secondHalf = secondHalf.next
    }

    return maxTwinSum
};