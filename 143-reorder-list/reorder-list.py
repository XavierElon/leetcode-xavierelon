# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        if not head or not head.next or not head.next.next:
            return

        slow, fast = head, head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next

        prev, curr = None, slow.next
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        slow.next = None

        first, second = head, prev
        while second:
            temp1, temp2 = first.next, second.next

            first.next = second
            second.next = temp1

            first = temp1
            second = temp2