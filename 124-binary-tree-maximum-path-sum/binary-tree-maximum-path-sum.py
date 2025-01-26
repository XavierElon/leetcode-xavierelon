# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.max_sum = float('-inf')  # Instance variable to track the maximum path sum
        self.max_path_sum_helper(root)
        return self.max_sum

    def max_path_sum_helper(self, node: TreeNode) -> int:
        if not node:
            return 0

        # Recursively compute max contributions from left and right subtrees
        left_sum = max(self.max_path_sum_helper(node.left), 0)
        right_sum = max(self.max_path_sum_helper(node.right), 0)

        # Update the maximum path sum (considering the path through the current node)
        current_path_sum = node.val + left_sum + right_sum
        self.max_sum = max(self.max_sum, current_path_sum)

        # Return the maximum contribution this node can make to a path
        return node.val + max(left_sum, right_sum)
