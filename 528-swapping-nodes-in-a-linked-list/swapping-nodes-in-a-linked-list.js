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
var swapNodes = function(head, k) {

      if (!head) {
        return null;
    }
    let left = head, right = head;
    for (let i = 1; i < k; i++) {
        left = left.next;
    }
    let curr = left;
    while (curr.next) {
        curr = curr.next;
        right = right.next;
    }
    let temp = left.val;
    left.val = right.val;
    right.val = temp;
    return head;
    
};