# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        curr = head
        prev = None
        next_ = None

        while curr:
            next_ = curr.next
            curr.next = prev
            prev = curr
            curr = next_

        return prev