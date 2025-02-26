# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        dummy_head = ListNode()
        current = dummy_head

        min_heap = []

        for list_index, head_node in enumerate(lists):
            if head_node:
                heapq.heappush(min_heap, (head_node.val, list_index, head_node))

        while min_heap:
            value, list_index, smallest_node = heapq.heappop(min_heap)

            current.next = smallest_node
            current = current.next

            if smallest_node.next:
                heapq.heappush(min_heap, (smallest_node.next.val, list_index, smallest_node.next))

        return dummy_head.next
