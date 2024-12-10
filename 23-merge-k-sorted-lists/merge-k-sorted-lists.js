var mergeKLists = function(lists) {
	// use MinPriorityQueue class from the datastructures-js library that is available in the LeetCode runtime
    const minHeap = new MinPriorityQueue({ priority: x => x.val });
    
    // push head of each list into heap
    for (const head of lists) {
        if (head) {
            minHeap.enqueue(head);
        }
    }
    
	// create head as dummy node
    let head = new ListNode();
    let tail = head;
    
    while (!minHeap.isEmpty()) {
        const node = minHeap.dequeue().element;
        tail.next = node;
        tail = tail.next;
        if (node.next) {
            minHeap.enqueue(node.next);
        }
    }
    return head.next;
};