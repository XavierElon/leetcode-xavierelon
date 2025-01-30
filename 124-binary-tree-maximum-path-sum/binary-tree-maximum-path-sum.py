# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.max_path_sum = float('-inf')

        def find_max(node: TreeNode) -> int:
            if not node:
                return 0

            left_gain = max(find_max(node.left), 0)
            right_gain = max(find_max(node.right), 0)

            path_sum = node.val + left_gain + right_gain

            self.max_path_sum = max(self.max_path_sum, path_sum)

            return node.val + max(left_gain, right_gain)

        find_max(root)
        return self.max_path_sum