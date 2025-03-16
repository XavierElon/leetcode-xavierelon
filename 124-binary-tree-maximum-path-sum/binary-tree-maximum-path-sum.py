# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        max_ = float('-inf')

        def dfs(node):
            nonlocal max_

            if not node:
                return 0

            left_max = max(dfs(node.left), 0)
            right_max = max(dfs(node.right), 0)

            max_ = max(left_max + right_max + node.val, max_)

            return node.val + max(left_max, right_max)

        dfs(root)
        return max_
