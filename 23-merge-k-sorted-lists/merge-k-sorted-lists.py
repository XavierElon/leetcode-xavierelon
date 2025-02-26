# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        dummy_head = ListNode()
        current = dummy_head
        heap = []

        node_counter = 0
        for head_node in lists:
            if head_node:
                heapq.heappush(heap, (head_node.val, node_counter, head_node))
                node_counter += 1

        while heap:
            value, _, smallest_node = heapq.heappop(heap)
            current.next = smallest_node
            current = current.next

            if smallest_node.next:
                heapq.heappush(heap, (smallest_node.next.val, node_counter, smallest_node.next))
                node_counter += 1

        return dummy_head.next