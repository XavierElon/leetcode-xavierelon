import heapq

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[Optional[ListNode]]
        :rtype: Optional[ListNode]
        """
        # Fix the lambda definition
        ListNode.__lt__ = lambda self, other: self.val < other.val

        heap = []
        for head in lists:
            if head:
                heapq.heappush(heap, head)

        dummy = ListNode(-1)
        current = dummy

        while heap:
            smallest_node = heapq.heappop(heap)
            current.next = smallest_node
            current = current.next

            if smallest_node.next:
                heapq.heappush(heap, smallest_node.next)

        return dummy.next