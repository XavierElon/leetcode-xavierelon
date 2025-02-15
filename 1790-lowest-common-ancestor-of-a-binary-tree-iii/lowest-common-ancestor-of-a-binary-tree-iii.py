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

        depth_p = get_depth(p)
        depth_q = get_depth(q)

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