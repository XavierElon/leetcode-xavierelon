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
    
        depth_p = self.get_depth(p)
        depth_q = self.get_depth(q)

        while depth_p > depth_q:
            p = p.parent
            depth_p -= 1

        while depth_q > depth_p:
            q = q.parent
            depth_q -= 1

        while p != q:
            p = p.parent
            q = q.parent

        return p

    def get_depth(self, node) -> int:
        depth = 0
        while node:
            node = node.parent
            depth += 1

        return depth
    
        