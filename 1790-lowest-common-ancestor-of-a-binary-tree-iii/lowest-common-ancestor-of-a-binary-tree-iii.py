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
        p_start, q_start = p, q    

        while p != q:
            if p.parent:
                p = p.parent
            else:
                p = q_start
            if q.parent:
                q = q.parent
            else:
                q = p_start

        return q