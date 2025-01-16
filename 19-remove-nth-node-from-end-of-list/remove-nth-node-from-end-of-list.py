# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(-1)
        dummy.next = head
        trailer = leader = dummy

        for _ in range(n):
            leader = leader.next

            if not leader:
                return head

        while leader.next:
            leader = leader.next
            trailer = trailer.next

        trailer.next = trailer.next.next
        return dummy.next