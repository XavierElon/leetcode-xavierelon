# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        max_ = 0
        def dfs(node):
            nonlocal max_
            if not node:
                return 0

            left = dfs(node.left)
            right = dfs(node.right)
            max_ = max(max_, left + right)

            return max(left, right) + 1

        dfs(root)
        return max_