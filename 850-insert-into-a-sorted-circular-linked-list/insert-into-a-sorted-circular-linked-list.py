"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next
"""

class Solution:
    def insert(self, head: 'Optional[Node]', insertVal: int) -> 'Node':
        if not head:
            new_head = Node(insertVal)
            new_head.next = new_head

            return new_head

        cur = head

        while cur.next != head:
            if cur.val <= insertVal <= cur.next.val:
                new_node = Node(insertVal, cur.next)

                cur.next = new_node

                return head

            elif cur.val > cur.next.val:
                if insertVal >= cur.val or insertVal <= cur.next.val:
                    new_node = Node(insertVal, cur.next)

                    cur.next = new_node

                    return head

            cur = cur.next

        new_node = Node(insertVal, cur.next)
        cur.next = new_node

        return head
