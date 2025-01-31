# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        max_sum = float('-inf')

        def calculate_path_sum(node: TreeNode) -> int:
            nonlocal max_sum

            if not node:
                return 0

            left_contribution = max(calculate_path_sum(node.left), 0)
            right_contribution = max(calculate_path_sum(node.right), 0)

            current_path_sum = node.val + left_contribution + right_contribution

            max_sum = max(max_sum, current_path_sum)

            return node.val + max(left_contribution, right_contribution)

        calculate_path_sum(root)
        return max_sum