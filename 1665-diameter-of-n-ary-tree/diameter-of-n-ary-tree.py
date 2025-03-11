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
        diameter = 0

        def height(node):
            nonlocal diameter

            if node is None:
                return 0

            max_height = 0
            second_max_height = 0

            for child in node.children:
                child_height = height(child)

                if child_height > max_height:
                    second_max_height = max_height
                    max_height = child_height
                elif child_height > second_max_height:
                    second_max_height = child_height

            diameter = max(diameter, max_height + second_max_height)

            return max_height + 1

        if root:
            height(root)
        return diameter