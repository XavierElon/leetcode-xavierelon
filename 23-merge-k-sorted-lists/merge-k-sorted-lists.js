/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null
    }

    while (lists.length > 1) {
        let l1 = lists.shift()
        let l2 = lists.shift()
        let merged = mergeLists(l1, l2)
        lists.push(merged)
    }
    return lists[0]
};

function mergeLists(l1, l2) {
    const dummy = new ListNode(0)
    let current = dummy

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }

    if (l1) {
        current.next = l1
    }

    if (l2) {
        current.next = l2
    }

    return dummy.next
}