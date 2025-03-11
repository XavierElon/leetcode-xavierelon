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
                return 0, 0

            max_height = 0
            second_max_height = 0
            max_child_diameter = 0

            for child in node.children:
                child_height, child_diameter = dfs(child)

                max_child_diameter = max(max_child_diameter, child_diameter)

                if child_height > max_height:
                    second_max_height = max_height
                    max_height = child_height
                elif child_height > second_max_height:
                    second_max_height = child_height

            current_height = 1 + max_height

            path_through_node = max_height + second_max_height

            current_diameter = max(max_child_diameter, path_through_node)

            return current_height, current_diameter

        if not root:
            return 0

        return dfs(root)[1]