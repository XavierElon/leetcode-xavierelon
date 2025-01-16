# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        mid = self.find_middle(head)
        second_head = self.reverse_list(mid)
        ptr1 = head
        ptr2 = second_head

        while ptr2:
            if ptr1.val != ptr2.val:
                return False
            ptr1, ptr2 = ptr1.next, ptr2.next
        return True
    
    def reverse_list(self, head: ListNode) -> ListNode:
        prev = None
        next = None
        current = head

        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next

        return prev

    def find_middle(self, head: ListNode) -> ListNode:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow

    def copy_linked_list(self, head: ListNode) -> ListNode:
        if not head:
            return None

        dummy = ListNode(0)
        current_copy = dummy
        current_original = head

        while current_original:
            current_copy.next = ListNode(current_original.val)
            current_copy = current_copy.next
            current_original = current_original.next

        return dummy.next