"""
# Definition for a Node.
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""

class Solution:
    def treeToDoublyList(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return None

        def dfs(current):
            if not current:
                return None, None

            left_head, left_tail = dfs(current.left)

            if left_tail:
                left_tail.right = current
                current.left = left_tail

            right_head, right_tail = dfs(current.right)

            if right_head:
                current.right = right_head
                right_head.left = current

            head = left_head if left_head else current
            tail = right_tail if right_tail else current

            return head, tail

        head, tail = dfs(root)

        head.left = tail
        tail.right = head

        return head