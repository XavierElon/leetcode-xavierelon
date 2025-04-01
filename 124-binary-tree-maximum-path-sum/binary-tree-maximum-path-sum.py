# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        max_path_sum = float('-inf')
        def dfs(node):
            if not node:
                return 0
            nonlocal max_path_sum

            left_max = max(dfs(node.left), 0)
            right_max = max(dfs(node.right), 0)

            max_path_sum = max(max_path_sum, left_max + right_max + node.val)
            
            return max(left_max, right_max) + node.val

        dfs(root)
        return max_path_sum