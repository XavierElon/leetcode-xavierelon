"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""

class Solution:
    def flatten(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head: return
        curr = head
        while curr:
            if curr.child:
                childNode = curr.child
                childNode.prev = curr

                while childNode.next:
                    childNode = childNode.next

                childNode.next = curr.next

                if childNode.next: childNode.next.prev = childNode

                curr.next = curr.child
                curr.child = None
            curr = curr.next

        return head