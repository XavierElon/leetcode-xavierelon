"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children if children is not None else []
"""

class Solution:
    def diameter(self, root: 'Node') -> int:
        """
        :type root: 'Node'
        :rtype: int
        """
        def dfs(node):
            if not node:
                return 0

            max_depth = 0

            for child in node.children:
                depth = 1 + dfs(child)
                self.diameter = max(self.diameter, depth + max_depth)
                max_depth = max(max_depth, depth)

            return max_depth
        
        self.diameter = 0
        dfs(root)

        return self.diameter