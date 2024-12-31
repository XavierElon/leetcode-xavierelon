/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 === null) return null
    if (list1 === null) return list2
    if (list2 === null) return list1
    
    let dummyHead = new ListNode(-1)
    let current = dummyHead

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    if (list1) {
        current.next = list1
    }
    if (list2) {
        current.next = list2
    }
    
    return dummyHead.next
};