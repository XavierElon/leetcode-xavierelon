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
             return root

        prev_and_head = [None, None]

        def dfs(current):
            if not current:
                return

            dfs(current.left)
            
            if prev_and_head[0] is None:
                prev_and_head[1] = current
            else:
                prev_and_head[0].right = current
                current.left = prev_and_head[0]

            prev_and_head[0] = current

            dfs(current.right)

        dfs(root)

        prev_and_head[1].left = prev_and_head[0]
        prev_and_head[0].right = prev_and_head[1]

        return prev_and_head[1]
        