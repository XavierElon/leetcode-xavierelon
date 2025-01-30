# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.is_within_bounds(root, float('-inf'), float('inf'))

    def is_within_bounds(self, node: TreeNode, lower_bound: int, upper_bound: int) -> bool:
        if not node:
            return True

        if not lower_bound < node.val < upper_bound:
            return False

        if not self.is_within_bounds(node.left, lower_bound, node.val):
            return False

        return self.is_within_bounds(node.right, node.val, upper_bound)