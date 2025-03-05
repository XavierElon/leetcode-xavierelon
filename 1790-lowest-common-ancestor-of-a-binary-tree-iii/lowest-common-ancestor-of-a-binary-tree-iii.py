"""
# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None
"""

class Solution:
    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':
        def get_depth(node):
            depth = 0
            while node:
                depth += 1
                node = node.parent
            return depth

        p_depth = get_depth(p)
        q_depth = get_depth(q)

        while p_depth > q_depth:
            p = p.parent
            p_depth -= 1

        while q_depth > p_depth:
            q = q.parent
            q_depth -= 1

        while p != q:
            p = p.parent
            q = q.parent

        return p

