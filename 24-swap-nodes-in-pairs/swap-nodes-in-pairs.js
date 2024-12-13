/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    return swap(head)
};

function swap (head) {
    if (head === null || head.next === null) return head

    let firstNode = head
    let secondNode = head.next
    let nextPair = secondNode.next
    secondNode.next = firstNode

    firstNode.next = swap(nextPair)

    return secondNode
}