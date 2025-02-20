"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return head

        current = head
        while current:
            copy = Node(current.val)
            copy.next = current.next
            current.next = copy
            current = current.next.next

        current = head
        while current:
            if current.random:
                current.next.random = current.random.next
            current = current.next.next
        
        current = head
        copy_head = current.next
        curr_copy = current.next
        while current:
            current.next = current.next.next

            if curr_copy.next:
                curr_copy.next = curr_copy.next.next

            current = current.next
            curr_copy = curr_copy.next

        return copy_head