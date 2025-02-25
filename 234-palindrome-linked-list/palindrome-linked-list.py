# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        copy_head = head
        mid = self.get_mid(head)

        reversed_head = self.reverse_list(mid)

        return self.check_palindrome(head, reversed_head)
        
    def get_mid(self, head):
        slow = fast = head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        
        return slow

    def reverse_list(self, head):
        curr, prev = head, None

        while curr:
            next_ = curr.next
            curr.next = prev
            prev = curr
            curr = next_
        return prev

    def check_palindrome(self, head, reversed_head):
        left, right = head, reversed_head

        while right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next

        return True