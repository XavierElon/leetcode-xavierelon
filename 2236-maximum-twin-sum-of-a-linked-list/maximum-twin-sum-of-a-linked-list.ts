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

    let current: ListNode = slow
    let prev: ListNode | null = null
    let next: ListNode | null = null

    while (current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    let firstHalf: ListNode | null = head
    let secondHalf: ListNode | null = prev
    let maxTwinNumber: number = 0
    console.log(firstHalf)
    console.log(secondHalf)

    while (secondHalf !== null) {
        const twinNumber: number = firstHalf.val + secondHalf.val
        maxTwinNumber = Math.max(maxTwinNumber, twinNumber)
        firstHalf = firstHalf.next
        secondHalf = secondHalf.next
    } 

    return maxTwinNumber
};