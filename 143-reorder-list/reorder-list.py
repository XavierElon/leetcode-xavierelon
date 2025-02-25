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
         return  # Lists with 0, 1, or 2 nodes don't need reordering
        
        # Step 1: Find the middle of the linked list
        slow = fast = head
        while fast and fast.next:
            slow = slow.next       # Moves one step at a time
            fast = fast.next.next  # Moves two steps at a time
        
        # Now 'slow' points to the middle node
        
        # Step 2: Reverse the second half of the linked list
        second_half = slow.next  # Start of second half
        slow.next = None         # Break the list into two halves
        
        # Reverse the second half
        prev = None
        current = second_half
        while current:
            next_temp = current.next  # Store next node
            current.next = prev       # Reverse the pointer
            prev = current            # Move prev forward
            current = next_temp       # Move current forward
        
        reversed_second_half = prev   # New head of the reversed second half
        
        # Step 3: Merge the two halves in alternating fashion
        first = head
        second = reversed_second_half
        
        while second:  # Second half could be shorter (or equal) if list has odd length
            # Save next pointers
            first_next = first.next
            second_next = second.next
            
            # Interweave the nodes
            first.next = second
            second.next = first_next
            
            # Move to the next pair of nodes
            first = first_next
            second = second_next