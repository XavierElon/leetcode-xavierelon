# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        max_path_sum = float('-inf')

        def find_max_path(node):
            nonlocal max_path_sum

            if not node:
                return 0

            left_gain = max(find_max_path(node.left), 0)
            right_gain = max(find_max_path(node.right), 0)

            current_path_sum = node.val + left_gain + right_gain

            max_path_sum = max(max_path_sum, current_path_sum)

            return node.val + max(left_gain, right_gain)

        find_max_path(root)

        return max_path_sum