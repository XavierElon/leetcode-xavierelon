# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node:
                return 0, 0

            left_diam, left_height = dfs(node.left)
            right_diam, right_height = dfs(node.right)

            current_diameter = max(left_diam, right_diam, right_height + left_height)
            current_height = max(left_height, right_height) + 1

            return current_diameter, current_height

        return dfs(root)[0]