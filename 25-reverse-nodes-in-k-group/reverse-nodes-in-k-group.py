# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        def get_length(node):
            length = 0
            
            while node:
                node = node.next
                length += 1
            
            return length

        length = get_length(head)
        dummy = ListNode(0, head)
        prev_group = dummy

        while length >= k:
            prev = None
            curr = prev_group.next
            tail = curr

            for _ in range(k):
                nxt = curr.next
                curr.next = prev
                prev = curr
                curr = nxt

            prev_group.next = prev
            tail.next = curr
            prev_group = tail

            length -= k
        
        return dummy.next