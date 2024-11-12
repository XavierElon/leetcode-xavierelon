/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null
    
    let current: _Node | null = head

    while (current !== null) {
        const copy: _Node = new _Node(current.val, current.next)
        current.next = copy
        current = copy.next
    }

    current = head

    // Set up random 
    while (current !== null) {
        if (current.random !== null) {
            current.next.random = current.random.next
        }
        current = current.next.next
    }

    current = head
    const copyHead: _Node = current.next
    let copyCurrent: _Node | null = current.next

    while (current !== null) {
        current.next = current.next.next
        if (copyCurrent.next !== null) {
            copyCurrent.next = copyCurrent.next.next
        }
        current = current.next
        copyCurrent = copyCurrent.next
    }
    return copyHead
};