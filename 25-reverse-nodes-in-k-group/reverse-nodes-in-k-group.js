/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (head === null || k <= 1) return head

    const dummy = new ListNode(0)
    dummy.next = head
    let groupPrev = dummy

    while (true) {
        let kth = groupPrev
        for (let i = 0; i < k && kth !== null; i++) {
            kth = kth.next
        }

        if (kth === null) {
            break
        }

        let groupNext = kth.next
        let prev = groupNext
        let current = groupPrev.next

        while (current !== groupNext) {
            let temp = current.next
            current.next = prev
            prev = current
            current = temp
        }

        let temp = groupPrev.next
        groupPrev.next = kth
        groupPrev = temp
    }

    return dummy.next
};