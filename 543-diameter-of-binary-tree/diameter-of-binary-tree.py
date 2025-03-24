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

            left_height, left_diam = dfs(node.left)
            right_height, right_diam = dfs(node.right)

            current_height = 1 + max(left_height, right_height)
            current_diam = max(left_diam, right_diam, left_height + right_height)

            return current_height, current_diam

        return dfs(root)[1]