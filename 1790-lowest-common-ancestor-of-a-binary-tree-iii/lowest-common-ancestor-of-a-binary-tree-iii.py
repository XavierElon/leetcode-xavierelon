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
        runner1, runner2 = p, q

        while runner1 != runner2:
            runner1 = q if runner1 is None else runner1.parent
            runner2 = p if runner2 is None else runner2.parent

        return runner1