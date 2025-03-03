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

        p_depth = self.get_depth(p_ptr)
        q_depth = self.get_depth(q_ptr)

        while p_depth > q_depth:
            p_ptr = p_ptr.parent
            p_depth -= 1
            
        while q_depth > p_depth:
            q_ptr = q_ptr.parent
            q_depth -= 1

        while p_ptr != q_ptr:
            p_ptr = p_ptr.parent
            q_ptr = q_ptr.parent

        return p_ptr
    
    def get_depth(self, node):
        depth = 0
        while node.parent:
            depth += 1
            node = node.parent
        return depth