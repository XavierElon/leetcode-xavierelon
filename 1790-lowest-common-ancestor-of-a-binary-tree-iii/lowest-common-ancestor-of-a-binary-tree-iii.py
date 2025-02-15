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
        p_node = p
        q_node = q

        while p_node != q_node:
            p_node = p_node.parent
            q_node = q_node.parent

            if not p_node:
                p_node = q
            if not q_node:
                q_node = p

        return p_node