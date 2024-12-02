/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
      if (!head) return null
    
    // Create current
    let current = head

    // Create copy nodes and insert them after original nodes
    while (current !== null) {
        const copy = new _Node(current.val, current.next)
        // Insert copy node after current node
        current.next = copy
        // Set current to copy's next which is current.next
        current = copy.next
    }

    // [Node1] -> [Copy of Node1] -> [Node2] -> [Copy of Node2] -> [Node3] -> [Copy of Node3] -> null

    // Reset current head
    current = head

    // Set up random 
    while (current !== null) {
        if (current.random !== null) {
            // Assign copy node random to copy of node pointed to by current.random
            current.next.random = current.random.next
        }
        // Move to next original node
        current = current.next.next
    }

    // Reset current head
    current = head
    // Initialize copyHead and copyCurrent to point to first copy
    const copyHead = current.next
    let copyCurrent= current.next

    // While current
    while (current !== null) {
        // Restore original list by skipping over copy node
        current.next = current.next.next
        if (copyCurrent.next !== null) {
            // Update next pointers in copied list to point to next copy node
            copyCurrent.next = copyCurrent.next.next
        }
        // Move to next Node
        current = current.next
        // Move to next copy node
        copyCurrent = copyCurrent.next
    }

    // Return copyhead
    return copyHead
};