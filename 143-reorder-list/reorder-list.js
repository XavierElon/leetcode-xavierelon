/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) return

    let mid = getMid(head)
    console.log(mid)
    secondHead = mid.next
    mid.next = null

    let reversedMid = reverseLinkedList(secondHead)

    mergeLists(head, reversedMid)
};


function getMid(head) {
    if (head === null) return head

    let fast = head
    let slow = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
}

function reverseLinkedList(head) {
    if (!head) return head

    let prev = null
    let next = null
    let current = head

    while (current) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}

function mergeLists(first, second) {
    let p1 = first
    let p2 = second

    while (p2) {
        let temp1 = p1.next
        let temp2 = p2.next
        
        p1.next = p2
        p2.next = temp1

        p1 = temp1
        p2 = temp2
    }
}