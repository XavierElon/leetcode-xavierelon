# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        current = head
        prev = None
        next = None

        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next

        return prev