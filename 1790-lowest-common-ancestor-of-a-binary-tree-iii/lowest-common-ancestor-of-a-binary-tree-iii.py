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
        p_ptr, q_ptr = p, q

        while p_ptr != q_ptr:
            p_ptr = p_ptr.parent
            if not p_ptr:
                p_ptr = q

            q_ptr = q_ptr.parent
            if not q_ptr:
                q_ptr = p

        return p_ptr