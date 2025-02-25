# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(-1)
        dummy.next = head
        curr = trailer = dummy

        for _ in range(n):
            curr = curr.next
        
            if not curr:
                return head

        while curr.next:
            curr = curr.next
            trailer = trailer.next

        trailer.next = trailer.next.next

        return dummy.next
